const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controls')
const sectbtn = document.querySelectorAll('.control')
const allsections = document.querySelector('.main-content')



console.log(sectBtns);


function PageTranstions(){
    for(let i = 0;i< sectbtn.length;i++){
        sectbtn[i].addEventListener('click',function (){
            let currentBtn = document.querySelectorAll('.active-btn')
           currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
           this.className+= ' active-btn'
          // console.log(this)
           
           
        })
    }
        
    allsections.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        
        if(id){
            sectBtns.forEach((btn)=>{
                console.log(btn)
                btn.classList.remove('active')
                
            })
        e.target.classList.add('active')

        sections.forEach((section)=>{
            section.classList.remove('active')
        })

        const element = document.getElementById(id);
        element.classList.add('active')
            
        }
        

    })

    }



PageTranstions()