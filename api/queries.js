import apiCall from '../helpers/fetch';





export const fetchFreelancers = (query, page) => {
  return apiCall(`search/services?search=${query}`, 'GET').catch(
    (err) => new Error(err.message)
  );
};

// fetch /me api
export const fetchMe = async (token) => {
  const data = await apiCall('/user/me', 'POST', token, null, null);
  return data;
};

// fetch /profile
export const fetchProfile = async (token) => {
  const usrID = await fetchMe(token);

  const data = await apiCall(`/profile/${usrID.id}`, 'GET', token, null, null);
  return data;
};

// fetch freelancer profile
export const fetchProfileFreelancer = async (id, token) => {
  const data = await apiCall(`/profile/${id}`, 'GET', token, '');

  console.log('data', data);

  return data;
};

// fetch /services
export const fetchServices = async (token, id) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(`/profile/${usrID.id}`, 'GET', token, null, null);
  const services = await data.services;
  const service = await services.find((x) => x.id == id);
  console.log(service);
  return service;
};

//  create service
export const createService = async ({ ...data }) => {
  const service = await apiCall(`/services`, 'POST', data.token, data.newData);
  return service;
};

//  update service
export const updateService = async ({ ...data }) => {
  const service = await apiCall(
    `/services/${data.srvID}`,
    'PUT',
    data.token,
    data.newData
  );
  return service;
};

export const deleteService = async ({ ...data }) => {
  // console.log(data);
  await apiCall(`/services/${data.id}`, 'DELETE', data.token)
  // return null
};




// pull /service
export const getService = async (token, id) => {
  const service = await apiCall(`/services/${id}`, 'GET', token, null, null);
  return service;
};

// pull /service of user
export const getUserServices = async (token) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(`/profile/${usrID.id}`, 'GET', token, null, null);
  const service = await data.services;
  return service;
};

//dashbord
export const fetchFreelancerDashboard = async (token) => {
  const usrID = await fetchMe(token);

  const data = await apiCall(
    `/dashboard/freelancer/${usrID.id}`,
    'GET',
    token,
    null,
    null
  );
  return data;
};
export const fetchEmployerDashboard = async (token) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(
    `/dashboard/employer/${usrID.id}`,
    'GET',
    token,
    null,
    null
  );
  return data;
};
