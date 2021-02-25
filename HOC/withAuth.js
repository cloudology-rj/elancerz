import Router from 'next/router';

const withAuthComponent = (Component) => {
  

  return (props) => {
    if (!props.isLogin) {
        typeof window !== 'undefined' &&  Router.push('/');
    }
    return <Component {...props} />;
  };
};

export default withAuthComponent;






