import { getEndpoint } from './utils';

export const testLambdaFunction = async data => {
  try {
    const response = await fetch(getEndpoint('project-read-all'));
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (e) {
    console.log('ERROR', e);
    return {};
  }
};