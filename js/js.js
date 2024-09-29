document.getElementById('btn').addEventListener('click', function() {
    const inputField = document.getElementById('input-field').value;
    const listContainer = document.getElementById('list-container');
    if(!typeof inputField === 'string' || inputField === '') {
        alert('Invalid Input');
        return;
    }
    else {
        const table = document.getElementById('table');
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        const div = document.createElement('div');
        div.className = ('w-5 h-5 rounded-full border border-gray-400 radio');
        const td = document.createElement('td');
        td.innerText = `${inputField}`;
        const i = document.createElement('i');
        i.className =('fa-solid fa-xmark close')
        // div.innerHTML = `
        //     <div class="flex items-center justify-between space-y-4">
        //                 <div class="flex items-center gap-4">
        //                     <div  id="radio" class="w-5 h-5 rounded-full border border-gray-400 radio"></div>
        //                     <p id="do-thing" class="text-xl do-thing">${inputField} </p>    
        //                 </div>
        //                 <i id="close" class="fa-solid fa-xmark close"></i>
        //             </div>
        // `
        th.appendChild(div)
        tr.appendChild(th)
        tr.appendChild(td);
        tr.appendChild(i);
        table.appendChild(tr);
        listContainer.appendChild(table)
        document.getElementById('input-field').value = '' ;


        div.onclick = function() {
            td.classList.add('line-through');
            div.classList.add('bg-[#FF6338]');
            div.classList.remove('border');
        }
        i.onclick = function() {
            tr.classList.add('hidden')
        }
    }
})