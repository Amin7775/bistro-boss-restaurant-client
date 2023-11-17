import { Helmet } from "react-helmet-async";

const useHook = ({page}) => {
    
    return (
        <Helmet>
          <title>Bistro Boss | {page}</title>
        </Helmet>
      );
    
};

export default useHook;