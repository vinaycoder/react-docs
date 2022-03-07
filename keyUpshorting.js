    const keyUpSearch = name => event => {
        let queryString=event.target.value.toLowerCase();
        if(queryString.length===0){
            return setShowRecords(arrayData);
        }
        if(showRecords.length > 0){
           let filterData= arrayData.filter(item =>             
             item.appType.toLowerCase().indexOf(queryString)===0 ||
             item.devFirstName.toLowerCase().indexOf(queryString)===0 ||
             moment(item.addedAuditTimeStamp).format('MM/DD/YYYY').toLowerCase().indexOf(queryString)===0 || 
             item.orgName.toLowerCase().indexOf(queryString)===0 || item.status.toLowerCase().indexOf(queryString)===0 ||
             (item.auditUserID && item.auditUserID.toLowerCase().indexOf(queryString)===0))        
           setShowRecords(filterData);
        }
       
              
    };
