function tao_mang()
{
    arr=[]
    for(let i=0;i<Math.floor(Math.random()*10)+10;i++){
        arr[i]=Math.floor(Math.random()*90)+11
    }
    return arr;
}

function sap_tang(){
    for(let i=0;i<arr.length-1;i++){
        for(j=arr.length-1;j>1;j--){
            if(arr[j]<arr[j-1])
            {
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}

function sap_giam(){
    for(let i=0;i<arr.length-1;i++){
        for(j=arr.length-1;j>1;j--){
            if(arr[j]>arr[j-1])
            {
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    return arr
}

function them(a,x){
    arr.splice(x,0,a)
    return arr
}

const createArr=document.getElementById('createArr')
createArr.addEventListener('click', function(){
    let ShowArray=document.querySelector("#ShowArray")
    ShowArray.textContent = tao_mang().join(', ')
})

const ascsort=document.getElementById('ascsort')
    ascsort.addEventListener('click',function(){
    let LastArr=document.querySelector('#LastArr')
    LastArr.textContent=sap_tang().join(', ')
})

const descsort=document.getElementById('descsort')
    descsort.addEventListener('click',function(){
    let LastArr=document.querySelector('#LastArr')
    LastArr.textContent=sap_giam().join(', ')
})

const AddValue=document.getElementById('addValue')
      AddValue.addEventListener('click',function(){
        let value=document.getElementById('index').value
        let index=document.getElementById('value').value
        let LastArr=document.querySelector('#LastArr')
        if(ShowArray.textContent==''){
            alert('Mảng ko tồn tại')
        }
        else if(value==''||index=='')
        {
            alert('Nhập thông tin phần tử cần thêm')
        }
        else
        LastArr.textContent=them(value,index).join(', ')
    })