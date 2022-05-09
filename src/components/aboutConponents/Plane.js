import React from 'react';
import styled, { keyframes } from 'styled-components';

const Plane = props => {
   return (
      <Wrapper>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
               enableBackground: 'new 0 0 512 512',
            }}
            // xmlSpace="preserve"
            {...props}
         >
            <path d="M128 443.733H93.867c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533H128c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM128 392.533H42.667c-4.71 0-8.533 3.823-8.533 8.533s3.823 8.533 8.533 8.533H128c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533zM128 341.333H76.8c-4.71 0-8.533 3.823-8.533 8.533S72.09 358.4 76.8 358.4H128c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.534-8.533-8.534zM93.867 119.467H128a8.536 8.536 0 0 0 8.533-8.533 8.536 8.536 0 0 0-8.533-8.533H93.867a8.536 8.536 0 0 0-8.533 8.533c-.001 4.71 3.822 8.533 8.533 8.533zM179.2 136.533a8.536 8.536 0 0 0 8.533-8.533V68.267h38.665c1.041 0 3.686 1.493 4.702 3.806l25.6 59.307a8.526 8.526 0 0 0 11.213 4.454c4.326-1.869 6.323-6.886 4.454-11.213l-25.617-59.35c-3.567-8.158-12.126-14.071-20.352-14.071h-38.665c-9.412 0-17.067 7.842-17.067 17.493V128c.001 4.71 3.824 8.533 8.534 8.533zM187.733 204.8c0-9.412-7.654-17.067-17.067-17.067-9.412 0-17.067 7.654-17.067 17.067s7.654 17.067 17.067 17.067 17.067-7.655 17.067-17.067zM110.933 68.267H128a8.536 8.536 0 0 0 8.533-8.533A8.536 8.536 0 0 0 128 51.201h-17.067a8.536 8.536 0 0 0-8.533 8.533 8.536 8.536 0 0 0 8.533 8.533zM324.267 187.733c-9.412 0-17.067 7.654-17.067 17.067s7.654 17.067 17.067 17.067c9.412 0 17.067-7.654 17.067-17.067s-7.655-17.067-17.067-17.067zM349.867 290.133h102.4c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-102.4c-4.71 0-8.533 3.823-8.533 8.533s3.822 8.533 8.533 8.533zM102.4 204.8c0 9.412 7.654 17.067 17.067 17.067s17.067-7.654 17.067-17.067-7.654-17.067-17.067-17.067S102.4 195.388 102.4 204.8zM290.133 204.8c0-9.412-7.654-17.067-17.067-17.067-9.412 0-17.067 7.654-17.067 17.067s7.654 17.067 17.067 17.067 17.067-7.655 17.067-17.067z" />
            <path d="M459.213 205.201c-5.581-20.881-22.733-51.601-58.146-51.601H69.111l-14.874-37.171c-3.191-8.388-11.273-14.029-20.104-14.029H17.067C7.654 102.4 0 110.054 0 119.467V179.2c0 81.348 63.718 145.067 145.067 145.067 4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533c-71.774 0-128-56.226-128-128v-59.733h17.067c1.212 0 3.311.811 4.207 3.174l17.067 42.667a8.543 8.543 0 0 0 7.927 5.359h296.934l6.92 27.674c.085.333.188.666.307.99 5.35 13.901 16.648 22.536 29.483 22.536h21.154c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533h-21.154c-7.868 0-11.87-7.458-13.372-11.145l-5.743-22.989h23.202c34.825 0 42.479 42.291 42.786 44.075a8.53 8.53 0 0 0 8.414 7.125c23.526 0 42.667 19.14 42.667 42.667s-19.14 42.667-42.667 42.667H313.054l10.394-21.948c2.014-4.258.196-9.344-4.062-11.366-4.25-2.005-9.344-.205-11.366 4.062l-76.843 162.227c-.93 2.031-3.541 3.558-4.779 3.558h-38.665v-153.6H281.6c4.71 0 8.533-3.823 8.533-8.533s-3.823-8.533-8.533-8.533H179.2a8.536 8.536 0 0 0-8.533 8.533v162.133c0 9.412 7.654 17.067 17.067 17.067h38.665c8.158 0 16.691-5.683 20.25-13.414l58.317-123.119h147.302c32.939 0 59.733-26.795 59.733-59.733-.001-30.586-23.109-55.887-52.788-59.335z" />
            <path d="M238.933 204.8c0-9.412-7.654-17.067-17.067-17.067-9.412 0-17.067 7.654-17.067 17.067s7.654 17.067 17.067 17.067 17.067-7.655 17.067-17.067z" />
         </svg>
      </Wrapper>
   );
};

export default Plane;
const Bounce = keyframes`
   from {  transform:translate(0, -10%) ;   }
   to {  transform: translate(0, 10%) ;   }
`;

const Wrapper = styled.div`
   animation: ${Bounce} 0.5s linear infinite alternate;
`;
