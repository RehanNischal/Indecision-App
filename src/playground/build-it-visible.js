
class Visible extends React.Component
{
   constructor(props){
       super(props)
       this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
       this.state={
           visibility:false
       };
   }
   handleToggleVisibility(){
             this.setState((prevState) => {
              return {
                  visibility: !prevState.visibility
              }
             
            })
   }
   render(){
    return (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'show details'}
        </button>
        {this.state.visibility && (
            <div>
            <p>Hey, These are some details you can see now</p>
            </div>
        )}
        </div>
    );
   };
}

ReactDOM.render(<Visible />,document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () =>
// {
//     visibility =!visibility;
//     render();
// };

// const render= () =>{
// const build = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={toggleVisibility}>
//     {visibility ? 'Hide details' : 'show details'}
//     </button>
//     {visibility && (
//         <div>
//         <p>Hey, These are some details you can see now</p>
//         </div>
//     )}
//     </div>
// );
// ReactDOM.render(build,document.getElementById('app'));
// };
// render();