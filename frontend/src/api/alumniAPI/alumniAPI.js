

const alumniAPI = (asvData, status) => {
    if (!['update', 'add'].includes(status)) {
        console.error('Invalid status! Use either "update" or "add".');
        return;
    }

    asvData.array.forEach( async (row) => {
        try{
            if(status === "add"){
                // Add alumni
                const response = await fetch('http://localhost:3000/api/alumni/addAlumni', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(row)
                });
                const data = await response.json();
                console.log(data);
            }
            if(status === "update"){
                // Update alumni
                const response = await fetch(`http://localhost:3000/api/alumni/updateAlumni/${row.email}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(row)
                });
                const data = await response.json();
                console.log(data);
            }
        }catch (error){
            console.error(error)
        }
    });
}

export default alumniAPI;