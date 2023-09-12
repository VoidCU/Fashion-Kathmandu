import { ComponentLoader } from 'adminjs';
const componentLoader = new ComponentLoader();

const Components = {
  myImage: componentLoader.add(
    'myImage',
    'C:/Users/VoidCU/Desktop/backend/dist/components/Image'
  ),
};
export { componentLoader, Components };
