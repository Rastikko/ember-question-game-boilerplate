export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('level'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
