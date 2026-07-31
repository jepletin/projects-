/*
1. Components are functions.
   input -> output
   input (data) -> output is UI

2. To create reusable components, you need an understanding of props.
   Props = properties.

3. Each component you create in React
   will always have props.

4. Props are passed from parent to child.
   -> All data types can be passed into props,
      including other components.
*/

 function  Parent(){
   const str ="hello world";
   const amount=2000;
   const isOK=true;
   const notSet=null;
    const car ={
      model:"Renult truck",
      manufacture:"Renult",
      engine:{
         cc:2500
         
      },
    };

    const colors=["blue","green","yellow"]
   return(
    <div>
        <h1>Iam a parent component</h1>
        <Child1 str= {str} amountInNumber={amount} isOK={isOK} notSet={notSet}/>
        <Child2 
        str= {str}
         amountInNumber={amount} 
         isOK={isOK} 
         notSet={notSet} 
         car={car}
         colors={colors}

        />
        <Child3 str= {str} amountInNumber={amount} isOK={isOK} notSet={notSet}/>
        

    </div>
   );
}
 function Child1(Props){
    console.log(Props);
    return(
        <div>
            <h1>Iam the child1 component</h1>
            <ul>
               <li>
                  Favourite String<b>{Props.str}</b>
               </li>
               <li>
                  Amount<b>{Props.amountInNumber}</b>
               </li>
               <li>
                  isOK<b>{ String (Props.isOK)}</b>
               </li>
               <li>
                  Not Set<b>{Props.notSet}</b>
               </li>
            </ul>
        </div>
    );

 }
 // using destructuirng 
 function Child2(Props){
   const {str,amountInNumber,isOK,notSet,car }=Props;
    return(
        <div>
            <h1>Iam the child2 component</h1>
            <ul>
               <li>
                  Favourite String<b>{str}</b>
               </li>
               <li>
                  Amount<b>{amountInNumber}</b>
               </li>
               <li>
                  isOK<b>{ String (isOK)}</b>{""}
                  {/*
                  for booleans  convert them to string before displaying
                   */}
               </li>
               <li>
                  Not Set<b>{notSet}</b>
               </li>
                <li>
                  Car Model <b>{car.model}</b>
               </li>
                <li>
                  Manufacturer <b>{car.manufacture}</b>
               </li>
                <li>
                  Engine CC <b>{car.engine.cc}</b>
               </li>
               
            </ul>
        </div>
    );

 }
// display props using  props keyword
//direct destructuring
  function Child3({str,amountInNumber,isOK,notSet}){
    return(
        <div>
            <h1>Iam the child3 component</h1>
            <ul>
               <li>
                  Favourite String<b>{str}</b>
               </li>
               <li>
                  Amount<b>{amountInNumber}</b>
               </li>
               <li>
                  isOK<b>{ String (isOK)}</b>
               </li>
               <li>
                  Not Set<b>{notSet}</b>
               </li>
            </ul>
        </div>
    );

 }





export default Parent;