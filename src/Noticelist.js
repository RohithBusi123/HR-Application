import { Link } from "react-router-dom";
import { FormContext } from "./FormContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

function Noticelist() {
  const { notices, setNotices, updateNotice } = useContext(FormContext);
  const [editingNoticeTitle, setEditingNoticeTitle] = useState(null);
  const [editedNotice, setEditedNotice] = useState({});

  const deleteNotice = (title) => {
    const newNotices = notices.filter((notice) => notice.title !== title);
    setNotices(newNotices); 
    localStorage.setItem('notices', JSON.stringify(newNotices));
  };

  const editNotice = (notice) => {
    setEditingNoticeTitle(notice.title);
    setEditedNotice(notice);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedNotice((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateNotice(editedNotice);
    setEditingNoticeTitle(null);
  };
  const location=useLocation();
  const pathnames=location.pathname.split("/").filter((x)=>x);

  return (
    
    
      
    <div style={{ backgroundColor: "lightgrey", height: "650px" ,}}>
         <div style={{display:"flex"}}>
            <h3 >Notice list</h3>
            <nav>
              <ul className="breadcrumb">
                <li style={{marginTop:"2%"}}>
                  <Link style={{textDecoration:"none",color:"black",marginLeft:"10%"}} to="/">Home</Link>
                  <Link style={{textDecoration:"none",color:"black",marginLeft:"15%"}} to="/employees">Employees</Link>
                </li>
                {pathnames.map((value,index)=>{
                  const to=`/${pathnames.slice(index+1).join("/")}`;
                  return(
                    <li style={{marginTop:"2%"}} key={to}>
                      <Link  style={{marginLeft:"55%",marginTop:"50%",textDecoration:"none",color:"black"}} to={to}>{value}</Link>

                    </li>
                  )
                })}

              </ul>
            </nav>
         
         </div>
      
      <div>
        <div
          style={{
            backgroundColor: "white",
            height: "80vh",
            marginLeft: "1%",
            marginRight: "1%",
          }}
        >
          <Link style={{ marginLeft: "80%" }} to="/addnotice">
            Addnotice
          </Link>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Title</th>
                  <th style={{ textAlign: "left" }}>Description</th>
                  <th style={{ textAlign: "left" }}>Status</th>
                  <th style={{ textAlign: "left" }}>CreatedOn</th>
                  <th style={{ textAlign: "left" }}>Actions</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {notices.map((notice, index) => (
                  <tr key={index}>
                    {editingNoticeTitle === notice.title ? (
                      <>
                        <td>
                          <input
                            type="text"
                            name="title"
                            value={editedNotice.title}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="description"
                            value={editedNotice.description}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="status"
                            value={editedNotice.status}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="createdon"
                            value={editedNotice.createdon}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td style={{ textAlign: "left" }}>
                          <button onClick={handleSave}>Save</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td style={{ textAlign: "left" }}>{notice.title}</td>
                        <td style={{ textAlign: "left" }}>{notice.description}</td>
                        <td style={{ textAlign: "left" }}>{notice.status}</td>
                        <td style={{ textAlign: "left" }}>{notice.createdon}</td>
                        <td style={{ textAlign: "left" }}>
                          <img
                            onClick={() => deleteNotice(notice.title)}
                            src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                            style={{ width: "20px", height: "20px" }}
                            alt="Delete"
                          />
                          <img
                            onClick={() => editNotice(notice)}
                            src="https://cdn-icons-png.flaticon.com/128/10308/10308238.png"
                            style={{ width: "20px", height: "20px", paddingLeft: "4px" }}
                            alt="Edit"
                          />
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    
      );
}

export default Noticelist;










