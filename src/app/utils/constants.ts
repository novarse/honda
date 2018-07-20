import {MyImage} from '../domain/myImage';
export class Constants {
  static readonly DEFAULT_IMG = 'DSC_0919.jpg';

  static readonly IMG_LIST: MyImage[] = [
    new MyImage('DSC_0919.jpg', 'Rear quarter panel'),
    new MyImage('DSC_0920.jpg', 'Close up damage'),
    new MyImage('DSC_0921.jpg', 'Close up damage 2'),
    new MyImage('DSC_0922.jpg', 'Close up damage 3'),
    new MyImage('DSC_0926.jpg', 'Broken mirror'),
    new MyImage('DSC_0934.jpg', 'Left side'),
    new MyImage('DSC_0939.jpg', 'Front right view'),
    new MyImage('DSC_0937.jpg', 'Front'),
    new MyImage('DSC_0923.jpg', 'Engine bay'),
    new MyImage('DSC_0925.jpg', 'Engine bay 3'),
    new MyImage('DSC_0938.jpg', 'Front left view'),
    new MyImage('DSC_0936.jpg', 'Rear left view'),
    new MyImage('DSC_0935.jpg', 'Rear'),
    new MyImage('DSC_0927.jpg', 'Inside, front'),
    new MyImage('DSC_0930.jpg', 'Left front wheel'),
    new MyImage('DSC_0931.jpg', 'Left front tread'),
    new MyImage('DSC_0932.jpg', 'Left rear wheel'),
    new MyImage('DSC_0933.jpg', 'Left rear tread')
  ]

}