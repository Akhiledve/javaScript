let list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
let list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

let a = list1.length;
let b = list2.length;

//unique set of users from List1 which are not in List2	
function uniqueNamesOfList1(list1, list2, a, b) {

    let uniqueList1 = []
    let s = new Set();
    for (let i = 0; i < b; i++)
        s.add(list2[i]);

    for (let i = 0; i < a; i++)
        if (!s.has(list1[i]))
            uniqueList1.push(list1[i]);
    console.log(uniqueList1);
}
uniqueNamesOfList1(list1, list2, a, b);



//unique set of users from List2 which are not in List1
function uniqueNamesOfList2(list1, list2, a, b) {

    let uniqueList2 = []
    let s = new Set();
    for (let i = 0; i < a; i++)
        s.add(list1[i]);

    for (let i = 0; i < b; i++)
        if (!s.has(list2[i]))
            uniqueList2.push(list2[i]);
    console.log(uniqueList2);

}
uniqueNamesOfList2(list1, list2, a, b);



// common Names of Both list1 and list2 
function commonNamesOfLists(list1, list2) {

    let commonNames = [];
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                commonNames.push(list1[i]);
                break;
            }
        }
    }
    console.log(commonNames)
}
commonNamesOfLists(list1, list2);