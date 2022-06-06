import { call } from 'redux-saga/effects';

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IRequestParams {
  // Tip: You can define any required param needed for each call here

  [key: string]: string | number | string[] | number[];
}

export interface IResponseWithHeader {
  response: Record<string, unknown> | Array<unknown>;
  header: Headers;
}

export interface IRequestOptions {
  method?: RequestMethod;
  body?: unknown;
  params: IRequestParams;
  headers?: HeadersInit;
}

export function throwIfError(
  response: Response,
  path: string,
  responseText: string | undefined
): void {
  if (response.status < 200 || response.status > 299) {
    const responseError = {
      errorCode: response.status,
      message: responseText
        ? responseText
        : `${response.status} : ${response.statusText}`,
      path,
    };
    throw responseError;
  }
}

// https://gist.github.com/niyazpk/f8ac616f181f6042d1e0?permalink_comment_id=1743025#gistcomment-1743025
// Add / Update a key-value pair in the URL query parameters
function updateUrlParameter(uri: string, key: string, value: string | number) {
  // remove the hash part before operating on the uri
  var i = uri.indexOf('#');
  var hash = i === -1 ? '' : uri.substr(i);
  uri = i === -1 ? uri : uri.substr(0, i);

  var re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
  var separator = uri.indexOf('?') !== -1 ? '&' : '?';

  if (!value) {
    // remove key-value pair if value is empty
    uri = uri.replace(new RegExp('([?&]?)' + key + '=[^&]*', 'i'), '');
    if (uri.slice(-1) === '?') {
      uri = uri.slice(0, -1);
    }
    // replace first occurrence of & by ? if no ? is present
    if (uri.indexOf('?') === -1) uri = uri.replace(/&/, '?');
  } else if (uri.match(re)) {
    uri = uri.replace(re, '$1' + key + '=' + value + '$2');
  } else {
    uri = uri + separator + key + '=' + value;
  }
  return uri + hash;
}

export function formatUrl(path: string, requestParams: IRequestParams): string {
  if (path === null || path === undefined) {
    throw new Error('path is not defined.');
  }

  if (!requestParams) {
    throw new Error('request params is not defined.');
  }

  Object.keys(requestParams).forEach((key) => {
    if (Array.isArray(requestParams[key])) {
      let count = -1;
      (requestParams[key] as unknown as string[]).forEach((value) => {
        count++;
        path = updateUrlParameter(path, `${key}[${count}]`, value);
      });
    } else {
      path = updateUrlParameter(
        path,
        key,
        requestParams[key] as number | string
      );
    }
  });

  return encodeURI(path);
}

export function* requestHelper<IResponse = Record<string, unknown>>(
  relativePath: string,
  requestOptions: IRequestOptions,
  isWebApi: boolean = false // Tip: Can be removed when using single api source
): Generator {
  if (!requestOptions) {
    throw new Error('requestOptions is not defined.');
  }

  const path = isWebApi
    ? `https://randomuser.me/${relativePath}`
    : `https://apiurl/mocktail/src/api/${relativePath}`; // Tip: Update to append your api's base Url

  const requestMethod: RequestMethod = requestOptions.method ?? 'GET';
  const fetchOptions: RequestInit = {
    method: requestMethod,
    headers: requestOptions.headers as HeadersInit,
  };

  if (requestOptions.body) {
    fetchOptions.body = JSON.stringify(requestOptions.body);
  }
  const formattedUrl = formatUrl(path, requestOptions.params);
  const response = (yield call(fetch, formattedUrl, fetchOptions)) as Response;
  const responseText = (yield call([response, response.text])) as string;
  throwIfError(response, path, responseText);

  if (responseText?.length) {
    return {
      response: JSON.parse(responseText) as IResponse,
      header: response.headers,
    } as IResponseWithHeader;
  }

  return {};
}
