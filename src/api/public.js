import client from './client';

const constantEndpoint = '/public/constants';
const statesEndpoint = '/public/states';
const citiesEndpoint = '/public/cities';
const metaInfoEndpoint = '/public/meta-info';
const policiesEndpoint = '/public/policies';
const questionnaireEndpoint = '/collector-questionaries';

const getConstants = () => client.get(constantEndpoint);

const getStates = () => client.get(statesEndpoint);

const getCities = (stateId) => {
  return client.get(`${citiesEndpoint}?state_id=${stateId}`);
};

const getMetaInfo = () => client.get(metaInfoEndpoint);

const getPolicies = () => client.get(policiesEndpoint);

const getQuestionnaire = () => client.get(questionnaireEndpoint);

export default {
  getConstants,
  getStates,
  getCities,
  getMetaInfo,
  getPolicies,
  getQuestionnaire,
};