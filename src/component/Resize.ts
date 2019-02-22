export default class Resize {
  static init = () => {
    window.addEventListener('resize', Resize.print);
  };

  static print = e => {
    console.log(e);
  };
}
