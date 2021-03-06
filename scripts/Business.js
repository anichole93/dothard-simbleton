export const Business = ( businessObject ) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__address">
                ${businessObject.addressFullStreet}
            </div>
            <div class="business_address">
                ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
            </div>
        </section>
    `
}

