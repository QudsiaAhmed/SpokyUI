import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getStrLocalStorage } from '../utils';

const UnProtectedRoutes = ({ Component }) => {
  const navigate = useNavigate();
//   useEffect(() => {
//     (async () => {
//       const user = await getStrLocalStorage('user');
//       if (user) {
//         navigate('/About');
//       }
//     })();
//   });

  return (
    <div>
      <Component />
    </div>
  );
};

export default UnProtectedRoutes;