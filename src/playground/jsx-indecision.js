console.log('App.js file is running');

// JSX - JavaScript XML
var app={
    title: 'InDecision App',
    subTitle: 'Very Respnsive App',
    options: []
};

const onFormSubmit = (e) => {
     e.preventDefault(); //stop the full page refresh
    
     const option = e.target.elements.option.value;
     if(option)
     {
       app.options.push(option);
       e.target.elements.option.value = '';
     }
     render();
};

const onRemoveAll= () =>{
        app.options=[];
        render();
};
const onMakeDecision= () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);  
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');
const render = () => {
  var template = ( 
    <div>
       <h1>{app.title}</h1> 
      {app.subTitle  && <p>{app.subTitle}</p>}
      <p>{app.options.length>0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button> 
    <ol>
       {
         
        app.options.map((option) => {
          return <li key={option}>{option}</li>;
        })
         
        }
         
       </ol> 
       <form onSubmit={onFormSubmit}>
       <input type="text" name="option"/>
       <button>Add Option</button>
       </form>
    </div>
    );
    ReactDOM.render(template,appRoot);
};
render();
