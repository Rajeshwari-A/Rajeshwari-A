const dev = {

    apiGateway: {
      //   REGION: "YOUR_DEV_API_GATEWAY_REGION",
      // URL: `https://${window.location.hostname}/api/v1`,
      URL: "https://w27f9j1lih.execute-api.us-west-2.amazonaws.com/api/"
    },
  };
  
  const prod = {
    apiGateway: {
      //   REGION: "YOUR_PROD_API_GATEWAY_REGION",
      URL: `https://${window.location.hostname}/api/v1`,
    },
  };
  
  const config = process.env.REACT_APP_STAGE === "dev" ? dev : prod;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config,
  };
  