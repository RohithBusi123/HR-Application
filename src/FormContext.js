// import React, { createContext, useState, useEffect } from 'react';

// export const FormContext = createContext();

// export const FormProvider = ({ children }) => {
//   const [employees, setEmployees] = useState([]);
//   const [tempEmployee, setTempEmployee] = useState({});
//   const [awards, setAwards] = useState([]);
//   const [notices, setNotices] = useState([]);
//   const [count, setCount] = useState(0);
  
//   const [presentCount, setPresentCount] = useState(0);
//   const [manuals, setManuals] = useState([]);
//   const [leaves, setLeaves] = useState([]);
//   const [absents, setAbsents] = useState([]);
//   const [loans, setLoans] = useState([]);
//   const [conveyances, setConveyances] = useState([]);
//   const [paySetups, setPaySetups] = useState([]);
//   const [qaCount, setQaCount] = useState(0);
//   const [softwareEng, setSoftwareEng] = useState(0);
//   const [absentcount,setabsentcount]=useState(0);
//   // const [presentcount,setpresentcount]=useState("");
//   // const updateAbsentCount=()=>{
//   //    setabsentcount(prevCount=>prevCount+1);

//   // }
  

//     useEffect(()=>{
//       const storedabsentcount=localStorage.getItem('absentcount');
//       if(storedabsentcount!==null){
//         setabsentcount(parseInt(storedabsentcount,10)|| 0);
//       }
//     })
//     const updateAbsentCount=()=>{
//       setabsentcount(prevCount=>{
//         const newabsentcount=prevCount+1;
//         localStorage.setItem('absentcount',newabsentcount.toString());
//         return newabsentcount;
//       })

//     }



 

//   // onst updatePresentCount = () => {
//   //   setPresentCount(prevCount => {
//   //     const newPresentCount = prevCount + 1;
//   //     localStorage.setItem('presentCount', newPresentCount.toString());
//   //     return newPresentCount;
//   //   });
//   // };
//   useEffect(()=>{
//     const storedPresentCount = localStorage.getItem('presentCount');
//     if (storedPresentCount !== null) {
//       setPresentCount(parseInt(storedPresentCount, 10) || 0);
//     }

//   },[])
//   const updatePresentCount = () => {
//     setPresentCount(prevCount => {
//       const newPresentCount = prevCount + 1;
//       localStorage.setItem('presentCount', newPresentCount.toString());
//       return newPresentCount;
//     });
//   };

//   useEffect(() => {
    

//     const storedLeaves = JSON.parse(localStorage.getItem('leaves'));
//     if (storedLeaves) {
//       setLeaves(storedLeaves);
//     }

//     const storedLoans = JSON.parse(localStorage.getItem('loans'));
//     if (storedLoans) {
//       setLoans(storedLoans);
//     }

//     const storedConveyances = JSON.parse(localStorage.getItem('conveyances'));
//     if (storedConveyances) {
//       setConveyances(storedConveyances);
//     }

//     const storedPaySetups = JSON.parse(localStorage.getItem('paySetups'));
//     if (storedPaySetups) {
//       setPaySetups(storedPaySetups);
//     }

//     const storedAwards = JSON.parse(localStorage.getItem('awards'));
//     if (storedAwards) {
//       setAwards(storedAwards);
//     }

//     const storedEmployees = JSON.parse(localStorage.getItem('employees'));
//     if (storedEmployees) {
//       setEmployees(storedEmployees);
//     }

//     const storedManuals = JSON.parse(localStorage.getItem('manuals'));
//     if (storedManuals) {
//       setManuals(storedManuals);
//     }

//     const storedNotices = JSON.parse(localStorage.getItem('notices'));
//     if (storedNotices) {
//       setNotices(storedNotices);
//     }

//     const storedAbsents = JSON.parse(localStorage.getItem('absents'));
//     if (storedAbsents) {
//       setAbsents(storedAbsents);
//     }
//   }, []);

//   useEffect(() => {
//     const newQaCount = employees.filter(employee => employee.designation === "qa").length;
//     setQaCount(newQaCount);

//     const newSoftwareEngCount = employees.filter(employee => employee.designation === "softwareengineer").length;
//     setSoftwareEng(newSoftwareEngCount);
//   }, [employees]);

  

//   const addEmployee = (employee) => {
//     const newEmployees = [...employees, employee];
//     setEmployees(newEmployees);
//     localStorage.setItem('employees', JSON.stringify(newEmployees));
//   };

//   const addBasicDetails = (basicDetails) => {
//     setTempEmployee(basicDetails);
//   };

//   const addEducationDetails = (educationDetails) => {
//     const combinedEmployee = { ...tempEmployee, ...educationDetails };
//     addEmployee(combinedEmployee);
//     setTempEmployee({});
//   };

//   const updateCount = () => {
//     setCount(prevCount => prevCount + 1);
//   };

//   const Leaverequest = (leave) => {
//     const newLeaves = [...leaves, leave];
//     setLeaves(newLeaves);
//     localStorage.setItem('leaves', JSON.stringify(newLeaves));
//   };

//   const handleLeaveDelete = (card) => {
//     const updatedLeaves = leaves.filter(leave => leave.cardno !== card);
//     setLeaves(updatedLeaves);
//     localStorage.setItem('leaves', JSON.stringify(updatedLeaves));
//   };

//   const Rohitloansubmit = (loan) => {
//     const newLoans = [...loans, loan];
//     setLoans(newLoans);
//     localStorage.setItem('loans', JSON.stringify(newLoans));
//   };

//   const Rohitaddconveyance = (conveyance) => {
//     const newConveyances = [...conveyances, conveyance];
//     setConveyances(newConveyances);
//     localStorage.setItem('conveyances', JSON.stringify(newConveyances));
//   };

//   const handlePaysetdata = (paysetupdata) => {
//     const newPaysetups = [...paySetups, paysetupdata];
//     setPaySetups(newPaysetups);
//     localStorage.setItem('paySetups', JSON.stringify(newPaysetups));
//   };

//   const deleteconveyance = (amount) => {
//     const newConveyance = conveyances.filter(conveyance => conveyance.amount !== amount);
//     setConveyances(newConveyance);
//     localStorage.setItem('conveyances', JSON.stringify(newConveyance));
//   };

//   const Absentsubmit = (data) => {
//     const newAbsents = [...absents, data];
//     setAbsents(newAbsents);
//     localStorage.setItem('absents', JSON.stringify(newAbsents));
//   };

//   const AddingAward = (award) => {
//     const newAwards = [...awards, award];
//     setAwards(newAwards);
//     localStorage.setItem('awards', JSON.stringify(newAwards));
//   };

//   const deleteAward = (code) => {
//     const newAwards = awards.filter(award => award.awardcode !== code);
//     setAwards(newAwards);
//     localStorage.setItem('awards', JSON.stringify(newAwards));
//   };

//   const updateAward = (updatedAward) => {
//     const newAwards = awards.map(award => 
//       award.awardcode === updatedAward.awardcode ? updatedAward : award
//     );
//     setAwards(newAwards);
//     localStorage.setItem('awards', JSON.stringify(newAwards));
//   };

//   const Rohitnotice = (notice) => {
//     const newNotices = [...notices, notice];
//     setNotices(newNotices);
//     localStorage.setItem('notices', JSON.stringify(newNotices));
//   };

//   const updateNotice = (updatedNotice) => {
//     const newNotices = notices.map(notice => 
//       notice.title === updatedNotice.title ? updatedNotice : notice
//     );
//     setNotices(newNotices);
//     localStorage.setItem('notices', JSON.stringify(newNotices));
//   };

//   const Manualsubmit = (manual) => {
//     const newManuals = [...manuals, manual];
//     setManuals(newManuals);
//     localStorage.setItem('manuals', JSON.stringify(newManuals));
//   };

//   const deleteManual = (code) => {
//     const newManuals = manuals.filter(manual => manual.employeecode !== code);
//     setManuals(newManuals);
    
//     localStorage.setItem('manuals', JSON.stringify(newManuals));
//     setPresentCount(prevCount => {
//       const newPresentCount = prevCount -manuals.length;
//       localStorage.setItem('presentCount', newPresentCount.toString());
//       return newPresentCount;
//     });
//   };

//   const saveEditManual = (updatedManual) => {
//     const newManuals = manuals.map(manual => 
//       manual.employeecode === updatedManual.employeecode ? updatedManual : manual
//     );
//     setManuals(newManuals);
//     localStorage.setItem('manuals', JSON.stringify(newManuals));
//   };

//   const updateLeave = (updatedLeave) => {
//     const newLeaves = leaves.map(leave => 
//       leave.employeecode === updatedLeave.employeecode ? updatedLeave : leave
//     );
//     setLeaves(newLeaves);
//     localStorage.setItem('leaves', JSON.stringify(newLeaves));
    
//   };

//   const deleteAbsent = (code) => {
//     const newAbsents = absents.filter(absent => absent.employeecode !== code);
//     setAbsents(newAbsents);
//     localStorage.setItem('absents', JSON.stringify(newAbsents));
//     setabsentcount(prevCount=>{
//       const newabsentcount=prevCount-awards.length;
//       localStorage.setItem('absentcount',newabsentcount.toString());
//       return newabsentcount;
//     })

//   };

//   const updateConveyance = (updatedConveyance) => {
//     const newConveyances = conveyances.map(conveyance => 
//       conveyance.amount === updatedConveyance.amount ? updatedConveyance : conveyance
//     );
//     setConveyances(newConveyances);
//     localStorage.setItem('conveyances', JSON.stringify(newConveyances));
//   };

//   const deleteloans = (cardno) => {
//     const newLoans = loans.filter(loan => loan.cardno !== cardno);
//     setLoans(newLoans);
//     localStorage.setItem('loans', JSON.stringify(newLoans));
//   };

//   const updateLoan = (updatedLoan) => {
//     const newLoans = loans.map(loan => 
//       loan.cardno === updatedLoan.cardno ? updatedLoan : loan
//     );
//     setLoans(newLoans);
//     localStorage.setItem('loans', JSON.stringify(newLoans));
//   };

//   const deletepaysetup = (cardno) => {
//     const newPaysetups = paySetups.filter(paysetup => paysetup.cardno !== cardno);
//     setPaySetups(newPaysetups);
//     localStorage.setItem('paySetups', JSON.stringify(newPaysetups));
//   };

//   const savePaySetUp = (updatedPaySetup) => {
//     const newPaysetups = paySetups.map(paysetup => 
//       paysetup.cardno === updatedPaySetup.cardno ? updatedPaySetup : paysetup
//     );
//     setPaySetups(newPaysetups);
//     localStorage.setItem('paySetups', JSON.stringify(newPaysetups));
//   };
  

//   return (
//     <FormContext.Provider
//       value={{
//         employees,
//         awards,
//         notices,
//         count,
//         absentcount,
//         manuals,
//         leaves,
//         absents,
//         loans,
//         conveyances,
//         paySetups,
//         presentCount,
//         qaCount,
//         softwareEng,
//         setNotices,
//         updateCount,
        
//         updatePresentCount,
//         addBasicDetails,
//         addEducationDetails,
//         AddingAward,
//         Rohitnotice,
//         Manualsubmit,
//         Leaverequest,
//         Absentsubmit,
//         Rohitloansubmit,
//         Rohitaddconveyance,
//         handlePaysetdata,
//         deleteAward,
//         updateAward,
//         updateNotice,
//         deleteManual,
//         saveEditManual,
//         handleLeaveDelete,
//         updateLeave,
//         deleteAbsent,
//         deleteconveyance,
//         updateConveyance,
//         deleteloans,
//         updateLoan,
//         deletepaysetup,
//         savePaySetUp,
//         addEmployee,
//         updateAbsentCount
        
//       }}
//     >
//       {children}
//     </FormContext.Provider>
//   );
// };







import React, { createContext, useState, useEffect } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [tempEmployee, setTempEmployee] = useState({});
  const [awards, setAwards] = useState([]);
  const [notices, setNotices] = useState([]);
  const [count, setCount] = useState(0);
  
  const [presentCount, setPresentCount] = useState(0);
  const [manuals, setManuals] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [absents, setAbsents] = useState([]);
  const [loans, setLoans] = useState([]);
  const [conveyances, setConveyances] = useState([]);
  const [paySetups, setPaySetups] = useState([]);
  const [qaCount, setQaCount] = useState(0);
  const [softwareEng, setSoftwareEng] = useState(0);
  const [absentcount,setabsentcount]=useState(0);
  // const [presentcount,setpresentcount]=useState("");
  // const updateAbsentCount=()=>{
  //    setabsentcount(prevCount=>prevCount+1);

  // }
  

    useEffect(()=>{
      const storedabsentcount=localStorage.getItem('absentcount');
      if(storedabsentcount!==null){
        setabsentcount(parseInt(storedabsentcount,10)|| 0);
      }
    })
    const updateAbsentCount=()=>{
      setabsentcount(prevCount=>{
        const newabsentcount=prevCount+1;
        localStorage.setItem('absentcount',newabsentcount.toString());
        return newabsentcount;
      })

    }



 

  // onst updatePresentCount = () => {
  //   setPresentCount(prevCount => {
  //     const newPresentCount = prevCount + 1;
  //     localStorage.setItem('presentCount', newPresentCount.toString());
  //     return newPresentCount;
  //   });
  // };
  useEffect(()=>{
    const storedPresentCount = localStorage.getItem('presentCount');
    if (storedPresentCount !== null) {
      setPresentCount(parseInt(storedPresentCount, 10) || 0);
    }

  },[])
  const updatePresentCount = () => {
    setPresentCount(prevCount => {
      const newPresentCount = prevCount + 1;
      localStorage.setItem('presentCount', newPresentCount.toString());
      return newPresentCount;
    });
  };

  useEffect(() => {
    

    const storedLeaves = JSON.parse(localStorage.getItem('leaves'));
    if (storedLeaves) {
      setLeaves(storedLeaves);
    }

    const storedLoans = JSON.parse(localStorage.getItem('loans'));
    if (storedLoans) {
      setLoans(storedLoans);
    }

    const storedConveyances = JSON.parse(localStorage.getItem('conveyances'));
    if (storedConveyances) {
      setConveyances(storedConveyances);
    }

    const storedPaySetups = JSON.parse(localStorage.getItem('paySetups'));
    if (storedPaySetups) {
      setPaySetups(storedPaySetups);
    }

    const storedAwards = JSON.parse(localStorage.getItem('awards'));
    if (storedAwards) {
      setAwards(storedAwards);
    }

    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }

    const storedManuals = JSON.parse(localStorage.getItem('manuals'));
    if (storedManuals) {
      setManuals(storedManuals);
    }

    const storedNotices = JSON.parse(localStorage.getItem('notices'));
    if (storedNotices) {
      setNotices(storedNotices);
    }

    const storedAbsents = JSON.parse(localStorage.getItem('absents'));
    if (storedAbsents) {
      setAbsents(storedAbsents);
    }
  }, []);

  useEffect(() => {
    const newQaCount = employees.filter(employee => employee.designation === "qa").length;
    setQaCount(newQaCount);

    const newSoftwareEngCount = employees.filter(employee => employee.designation === "softwareengineer").length;
    setSoftwareEng(newSoftwareEngCount);
  }, [employees]);

  

  const addEmployee = (employee) => {
    const newEmployees = [...employees, employee];
    setEmployees(newEmployees);
    localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  const addBasicDetails = (basicDetails) => {
    setTempEmployee(basicDetails);
  };

  const addEducationDetails = (educationDetails) => {
    const combinedEmployee = { ...tempEmployee, ...educationDetails };
    addEmployee(combinedEmployee);
    setTempEmployee({});
  };

  // const updateCount = () => {
  //   setCount(prevCount => prevCount + 1);
  // };

  const Leaverequest = (leave) => {
    const newLeaves = [...leaves, leave];
    setLeaves(newLeaves);
    localStorage.setItem('leaves', JSON.stringify(newLeaves));
  };

  const handleLeaveDelete = (card) => {
    const updatedLeaves = leaves.filter(leave => leave.cardno !== card);
    setLeaves(updatedLeaves);
    localStorage.setItem('leaves', JSON.stringify(updatedLeaves));
  };

  const Rohitloansubmit = (loan) => {
    const newLoans = [...loans, loan];
    setLoans(newLoans);
    localStorage.setItem('loans', JSON.stringify(newLoans));
  };

  const Rohitaddconveyance = (conveyance) => {
    const newConveyances = [...conveyances, conveyance];
    setConveyances(newConveyances);
    localStorage.setItem('conveyances', JSON.stringify(newConveyances));
  };

  const handlePaysetdata = (paysetupdata) => {
    const newPaysetups = [...paySetups, paysetupdata];
    setPaySetups(newPaysetups);
    localStorage.setItem('paySetups', JSON.stringify(newPaysetups));
  };

  const deleteconveyance = (amount) => {
    const newConveyance = conveyances.filter(conveyance => conveyance.amount !== amount);
    setConveyances(newConveyance);
    localStorage.setItem('conveyances', JSON.stringify(newConveyance));
  };

  const Absentsubmit = (data) => {
    const newAbsents = [...absents, data];
    setAbsents(newAbsents);
    localStorage.setItem('absents', JSON.stringify(newAbsents));
  };

  const AddingAward = (award) => {
    const newAwards = [...awards, award];
    setAwards(newAwards);
    localStorage.setItem('awards', JSON.stringify(newAwards));
  };

  const deleteAward = (code) => {
    const newAwards = awards.filter(award => award.awardcode !== code);
    setAwards(newAwards);
    localStorage.setItem('awards', JSON.stringify(newAwards));
  };

  const updateAward = (updatedAward) => {
    const newAwards = awards.map(award => 
      award.awardcode === updatedAward.awardcode ? updatedAward : award
    );
    setAwards(newAwards);
    localStorage.setItem('awards', JSON.stringify(newAwards));
  };

  const Rohitnotice = (notice) => {
    const newNotices = [...notices, notice];
    setNotices(newNotices);
    localStorage.setItem('notices', JSON.stringify(newNotices));
  };

  const updateNotice = (updatedNotice) => {
    const newNotices = notices.map(notice => 
      notice.title === updatedNotice.title ? updatedNotice : notice
    );
    setNotices(newNotices);
    localStorage.setItem('notices', JSON.stringify(newNotices));
  };

  const Manualsubmit = (manual) => {
    const newManuals = [...manuals, manual];
    setManuals(newManuals);
    localStorage.setItem('manuals', JSON.stringify(newManuals));
  };

  const deleteManual = (code) => {
    const newManuals = manuals.filter(manual => manual.employeecode !== code);
    setManuals(newManuals);
    
    localStorage.setItem('manuals', JSON.stringify(newManuals));
    setPresentCount(prevCount => {
      const newPresentCount = prevCount -manuals.length;
      localStorage.setItem('presentCount', newPresentCount.toString());
      return newPresentCount;
    });
  };

  const saveEditManual = (updatedManual) => {
    const newManuals = manuals.map(manual => 
      manual.employeecode === updatedManual.employeecode ? updatedManual : manual
    );
    setManuals(newManuals);
    localStorage.setItem('manuals', JSON.stringify(newManuals));
  };

  const updateLeave = (updatedLeave) => {
    const newLeaves = leaves.map(leave => 
      leave.employeecode === updatedLeave.employeecode ? updatedLeave : leave
    );
    setLeaves(newLeaves);
    localStorage.setItem('leaves', JSON.stringify(newLeaves));
    
  };

  const deleteAbsent = (code) => {
    const newAbsents = absents.filter(absent => absent.employeecode !== code);
    setAbsents(newAbsents);
    localStorage.setItem('absents', JSON.stringify(newAbsents));
    setabsentcount(prevCount=>{
      const newabsentcount=prevCount-awards.length;
      localStorage.setItem('absentcount',newabsentcount.toString());
      return newabsentcount;
    })

  };

  const updateConveyance = (updatedConveyance) => {
    const newConveyances = conveyances.map(conveyance => 
      conveyance.amount === updatedConveyance.amount ? updatedConveyance : conveyance
    );
    setConveyances(newConveyances);
    localStorage.setItem('conveyances', JSON.stringify(newConveyances));
  };

  const deleteloans = (cardno) => {
    const newLoans = loans.filter(loan => loan.cardno !== cardno);
    setLoans(newLoans);
    localStorage.setItem('loans', JSON.stringify(newLoans));
  };

  const updateLoan = (updatedLoan) => {
    const newLoans = loans.map(loan => 
      loan.cardno === updatedLoan.cardno ? updatedLoan : loan
    );
    setLoans(newLoans);
    localStorage.setItem('loans', JSON.stringify(newLoans));
  };

  const deletepaysetup = (cardno) => {
    const newPaysetups = paySetups.filter(paysetup => paysetup.cardno !== cardno);
    setPaySetups(newPaysetups);
    localStorage.setItem('paySetups', JSON.stringify(newPaysetups));
  };

  const savePaySetUp = (updatedPaySetup) => {
    const newPaysetups = paySetups.map(paysetup => 
      paysetup.cardno === updatedPaySetup.cardno ? updatedPaySetup : paysetup
    );
    setPaySetups(newPaysetups);
    localStorage.setItem('paySetups', JSON.stringify(newPaysetups));
  };



  // useEffect(()=>{
  //   const storedPresentCount = localStorage.getItem('presentCount');
  //   if (storedPresentCount !== null) {
  //     setPresentCount(parseInt(storedPresentCount, 10) || 0);
  //   }

  // },[])
  // const updatePresentCount = () => {
  //   setPresentCount(prevCount => {
  //     const newPresentCount = prevCount + 1;
  //     localStorage.setItem('presentCount', newPresentCount.toString());
  //     return newPresentCount;
  //   });
  // };
  useEffect(()=>{
    const storedCount=localStorage.getItem('count');
    if(storedCount!==null){
      setCount(parseInt(storedCount,10)|| 0);
    }
  },[])
  const updateCount=()=>{
    setCount(prevcount=>{
      const newCount=prevcount+1;
      localStorage.setItem('count',newCount.toString());
      return newCount;
    })
  }

  return (
    <FormContext.Provider
      value={{
        employees,
        awards,
        notices,
        count,
        absentcount,
        manuals,
        leaves,
        absents,
        loans,
        conveyances,
        paySetups,
        presentCount,
        qaCount,
        softwareEng,
        setNotices,
        updateCount,
        
        updatePresentCount,
        addBasicDetails,
        addEducationDetails,
        AddingAward,
        Rohitnotice,
        Manualsubmit,
        Leaverequest,
        Absentsubmit,
        Rohitloansubmit,
        Rohitaddconveyance,
        handlePaysetdata,
        deleteAward,
        updateAward,
        updateNotice,
        deleteManual,
        saveEditManual,
        handleLeaveDelete,
        updateLeave,
        deleteAbsent,
        deleteconveyance,
        updateConveyance,
        deleteloans,
        updateLoan,
        deletepaysetup,
        savePaySetUp,
        addEmployee,
        updateAbsentCount
        
      }}
    >
      {children}
    </FormContext.Provider>
  );
};


















