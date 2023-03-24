import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getStrLocalStorage } from '../utils';

const ProtectedRoutes = ({ Component }) => {
  const navigate = useNavigate();
//   useEffect(() => {
//     (async () => {
//       const user = await getStrLocalStorage('user');
//       if (!user) {
//         navigate('/');
//       }
//     })();
//   });

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoutes;