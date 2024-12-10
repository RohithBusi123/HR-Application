// import { useContext, useEffect, useState } from "react";
// import { FormContext } from "./FormContext";
// import { Link, useLocation } from "react-router-dom";

// function Firstdash() {
//     const { count, absentcount,presentCount, qaCount, softwareEng } = useContext(FormContext);
//     const location = useLocation();
//     const pathnames = location.pathname.split("/").filter((x) => x);

//     const ultimateTotalCount = 10;

//     const [totalCount, setTotalCount] = useState(0);
//     const [softTotalCount, setSoftTotalCount] = useState(0);

//     useEffect(() => {
//         const ultimateCount = (qaCount/ ultimateTotalCount) * 100;
//         setTotalCount(ultimateCount);
//     }, [qaCount]);

//     useEffect(() => {
//         // Update the total width for the software engineer bar as a percentage of a 100% max width
//         const ultimateSoftCount = (softwareEng / ultimateTotalCount) * 100;
//         setSoftTotalCount(ultimateSoftCount);
//     }, [softwareEng]);

//     const getBorderBarWidth = () => {
//         const width = Math.min(totalCount, 100);
//         return `${width}%`; // Width as a percentage of the container's width
//     };

//     const getSoftBorderBarWidth = () => {
//         const width = Math.min(softTotalCount, 100);
//         return `${width}%`; // Width as a percentage of the container's width
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <nav>
//                     <ul className="breadcrumb">
//                         <li>
//                             <Link style={{ color: "black", textDecoration: "none" }} to="/">Home</Link>
//                         </li>
//                         {pathnames.map((value, index) => {
//                             const to = `/${pathnames.slice(0, index + 1).join('/')}`;
//                             return (
//                                 <li key={to}>
//                                     <Link style={{ padding: "15%", color: "black", textDecoration: "none" }} to={to}>{value}</Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </nav>
//             </div>

//             <div className="row" style={{ padding: "0px 10px" }}>
//                 <div style={{ display: "flex" }}>
//                     <div style={{ border: "0px solid black", width: "16%",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", color: "black" }}>
//                         <h6>Total Employee:</h6>
//                         <h2>{count}</h2>
//                     </div>
//                     <div style={{ border: "0px solid black", marginLeft: "4%", width: "16%",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
//                         <h6>Total Absent:</h6>
//                         <h3>{absentcount}</h3>
                        
//                     </div>
//                     <div style={{ border: "0px solid black", marginLeft: "4%", width: "16%" ,boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
//                         <h6>Total Present:</h6>
//                         <h4>{presentCount}</h4>
                        
//                     </div>
//                 </div>
//                 <h6 style={{ marginTop: "10%" }}>Designation Summary</h6>
//                 <div className="row" style={{ marginTop: "4%", marginLeft: "-4%" }}>
//                     <div style={{ border: "0px solid black", marginLeft: "4%", width: "20%", background: "lightGreen", color: "white" ,height:"100px"}}>
//                         <h6>qa:</h6>
//                         <h5>{qaCount}</h5>
//                         <div style={{ border: "1px solid black", width: "100%", height: "10%",borderRadius: "40px" }}>
//                             <div style={{ width: getBorderBarWidth(), height: "100%", backgroundColor: "orange" }}>
//                                 {/* This div's width changes dynamically */}
//                             </div>
//                         </div>
                        
//                     </div>
//                     <div style={{ border: "0px solid black", marginLeft: "4%", width: "20%" ,background: "lightBlue", color: "white" }}>
//                         <h6>softwareengineer:</h6>
//                         <h5 >{softwareEng}</h5>
//                         <div style={{ border: "1px solid black", width: "100%", height: "10%" ,borderRadius: "40px"}}>
//                             <div style={{ width: getSoftBorderBarWidth(), height: "100%", backgroundColor: "rgba(0, 128, 0, 1)" }}>
//                                 {/* This div's width changes dynamically */}
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Firstdash;










import { useContext, useEffect, useState } from "react";
import { FormContext } from "./FormContext";
import { Link, useLocation } from "react-router-dom";

function Firstdash() {
    const { count, absentcount,presentCount, qaCount, softwareEng } = useContext(FormContext);
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    const ultimateTotalCount = 10;

    const [totalCount, setTotalCount] = useState(0);
    const [softTotalCount, setSoftTotalCount] = useState(0);

    useEffect(() => {
        const ultimateCount = (qaCount/ ultimateTotalCount) * 100;
        setTotalCount(ultimateCount);
    }, [qaCount]);

    useEffect(() => {
        // Update the total width for the software engineer bar as a percentage of a 100% max width
        const ultimateSoftCount = (softwareEng / ultimateTotalCount) * 100;
        setSoftTotalCount(ultimateSoftCount);
    }, [softwareEng]);

    const getBorderBarWidth = () => {
        const width = Math.min(totalCount, 100);
        return `${width}%`; // Width as a percentage of the container's width
    };

    const getSoftBorderBarWidth = () => {
        const width = Math.min(softTotalCount, 100);
        return `${width}%`; // Width as a percentage of the container's width
    };
    

    return (
        <div className="container">
            <div className="row">
                <nav>
                    <ul className="breadcrumb">
                        <li>
                            <Link style={{ color: "black", textDecoration: "none" }} to="/">Home</Link>
                        </li>
                        {pathnames.map((value, index) => {
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                            return (
                                <li key={to}>
                                    <Link style={{ padding: "15%", color: "black", textDecoration: "none" }} to={to}>{value}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className="row" style={{ padding: "0px 10px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ border: "0px solid black", width: "16%",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px", color: "black" }}>
                        <h6>Total Employee:</h6>
                        <h2>{count}</h2>
                    </div>
                    <div style={{ border: "0px solid black", marginLeft: "4%", width: "16%",boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                        <h6>Total Absent:</h6>
                        <h3>{absentcount}</h3>
                        
                    </div>
                    <div style={{ border: "0px solid black", marginLeft: "4%", width: "16%" ,boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                        <h6>Total Present:</h6>
                        <h4>{presentCount}</h4>
                        
                    </div>
                </div>
                <h6 style={{ marginTop: "10%" }}>Designation Summary</h6>
                <div className="row" style={{ marginTop: "4%", marginLeft: "-4%" }}>
                    <div style={{ border: "0px solid black", marginLeft: "4%", width: "20%", background: "lightGreen", color: "white" ,height:"100px"}}>
                        <h6>qa:</h6>
                        <h5>{qaCount}</h5>
                        <div style={{ border: "1px solid black", width: "100%", height: "10%",borderRadius: "40px" }}>
                            <div style={{ width: getBorderBarWidth(), height: "100%", backgroundColor: "orange" }}>
                                {/* This div's width changes dynamically */}
                            </div>
                        </div>
                        
                    </div>
                    <div style={{ border: "0px solid black", marginLeft: "4%", width: "20%" ,background: "lightBlue", color: "white" }}>
                        <h6>softwareengineer:</h6>
                        <h5 >{softwareEng}</h5>
                        <div style={{ border: "1px solid black", width: "100%", height: "10%" ,borderRadius: "40px"}}>
                            <div style={{ width: getSoftBorderBarWidth(), height: "100%", backgroundColor: "rgba(0, 128, 0, 1)" }}>
                                {/* This div's width changes dynamically */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firstdash;

