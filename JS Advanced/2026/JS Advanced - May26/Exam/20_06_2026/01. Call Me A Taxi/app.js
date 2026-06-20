window.addEventListener('load', solve);

function solve() {

    // Input fields;
    const pickupLocationField = document.getElementById('pick-up-location');
    const dropoffLocationField = document.getElementById('drop-off-location');
    const nrOfPassengersField = document.getElementById('number-of-passengers');
    const dateTimeField = document.getElementById('date-time');
    const taxiTypeField = document.getElementById('taxi-type');

    // The order button + listener on it
    const orderBtn = document.getElementById('order-btn');
    orderBtn.addEventListener('click', onOrder);

    // Order-info-list and Confirm-order-list
    const orderInfoList = document.querySelector('.order-info-list');
    const confirmOrderList = document.querySelector('.confirm-order-list');

    function onOrder(event) {
        event.preventDefault();

        // Input field values
        const pickup = pickupLocationField.value;
        const dropoff = dropoffLocationField.value;
        const passengers = nrOfPassengersField.value;
        const time = dateTimeField.value;
        const taxiType = taxiTypeField.value;

        // Check if any of the input fields are empty, and if so, drop the event
        if (
            pickup === '' ||
            dropoff === '' ||
            passengers === '' ||
            time === '' ||
            taxiType === ''
        ) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'order-content';
        orderInfoList.appendChild(li);

        const article = document.createElement('article');
        li.appendChild(article);

        const h3_pick = document.createElement('h3');
        h3_pick.textContent = `Pick From: ${pickup}`;
        article.appendChild(h3_pick);

        const h3_drop = document.createElement('h3');
        h3_drop.textContent = `Drop-Off: ${dropoff}`;
        article.appendChild(h3_drop);

        const p_pass = document.createElement('p');
        p_pass.textContent = `Passengers: ${passengers}`;
        article.appendChild(p_pass);

        const p_time = document.createElement('p');
        p_time.textContent = `Time: ${time}`;
        article.appendChild(p_time);

        const p_type = document.createElement('p');
        p_type.textContent = `Type: ${taxiType}`;
        article.appendChild(p_type);

        pickupLocationField.value = '';
        dropoffLocationField.value = '';
        nrOfPassengersField.value = '';
        dateTimeField.value = '';
        taxiTypeField.value = '';
        orderBtn.disabled = true;

        const btnWrapper = document.createElement('div');
        btnWrapper.className = 'btn-wrapper';
        li.appendChild(btnWrapper);

        const btnEdit = document.createElement('button');
        btnEdit.className = "edit-btn";
        btnEdit.textContent = "Edit";
        btnWrapper.appendChild(btnEdit);
        btnEdit.addEventListener('click', onEdit);

        const btnContinue = document.createElement('button');
        btnContinue.className = 'continue-btn';
        btnContinue.textContent = "Continue";
        btnWrapper.appendChild(btnContinue);
        btnContinue.addEventListener('click', onContinue);

        function onEdit() {
            pickupLocationField.value = pickup;
            dropoffLocationField.value = dropoff;
            nrOfPassengersField.value = passengers;
            dateTimeField.value = time;
            taxiTypeField.value = taxiType;
            orderBtn.disabled = false;
            orderInfoList.removeChild(li);
        }

        function onContinue() {
            confirmOrderList.appendChild(li);
            li.removeChild(btnWrapper);

            const btnWrapper_cont = document.createElement('div');
            btnWrapper_cont.className = 'btn-wrapper';
            li.appendChild(btnWrapper_cont);

            const btnCancel = document.createElement('button');
            btnCancel.className = 'cancel-btn';
            btnCancel.textContent = "Cancel";
            btnWrapper_cont.appendChild(btnCancel);
            btnCancel.addEventListener('click', onCancel);

            const btnConfirm = document.createElement('button');
            btnConfirm.className = 'confirm-btn';
            btnConfirm.textContent = 'Confirm';
            btnWrapper_cont.appendChild(btnConfirm);
            btnConfirm.addEventListener('click', onConfirm);

            
        }     

        const status = document.getElementById('status');
        status.addEventListener('click', onReload);

        function onCancel() {
            confirmOrderList.removeChild(li);
            orderBtn.disabled = false;
            status.className = 'taxi-not-complete';
            status.textContent = 'Taxi request was not completed.';            
        }

        function onConfirm() {
            confirmOrderList.removeChild(li);
            orderBtn.disabled = false;
            status.className = 'taxi-ordered';
            status.textContent = 'Taxi has been successfully ordered.'
        }  

        function onReload() {
            location.reload();
        }
    }
}
