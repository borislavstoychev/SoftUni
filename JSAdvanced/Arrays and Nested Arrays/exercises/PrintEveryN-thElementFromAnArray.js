function array(arr, step){
    return arr.filter((a,i) => i%step===0)
}

array(['5', 
'20', 
'31', 
'4', 
'20'], 
2)