import ContentLoader from 'react-content-loader';

const Loader = () => {
    return (
      <ContentLoader
        speed={2}
        width={900}
        height={340}
        viewBox="0 0 900 340"
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
       
      >
        <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="153" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="153" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="202" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="202" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="251" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="251" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="300" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="300" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="349" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="349" rx="4" ry="4" width="35" height="38" />
        <rect x="50" y="398" rx="4" ry="4" width="343" height="38" />
        <rect x="8" y="398" rx="4" ry="4" width="35" height="38" />
      </ContentLoader>
    )
  }
  
  Loader.metadata = {
    name: 'Abraham Calsin',
    github: 'abrahamcalsin',
    description: 'Loading a list of tasks.',
    filename: 'Loader',
  }
  
  export default Loader;