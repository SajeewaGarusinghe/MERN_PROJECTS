import { useState, useEffect } from 'react';
import {Container} from "@material-ui/core"

import axios from 'axios';

const BootcampsPage = () => {
  // Component State
  const [bootcamps, setBootcamps] = useState([]);
  const [loading, setLoading] = useState(false);

  // Side effects
  useEffect(() => {
    let cancel;

    const fetchData = async () => {
      setLoading(true);
      let cancel;
      try {
        const { data } = await axios({
          method: 'GET',
          url: `/api/v1/bootcamps`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, []);

  return (
    <Container  >
      {/* Filtering and Sorting Section */}
    </Container>
  );
};

export default BootcampsPage;
