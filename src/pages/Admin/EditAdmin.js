import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { updateAdminInfo } from "../../appRedux/slice/admins/adminFxn";
import { toast } from "react-toastify";
import Spinner from "../../components/spinner";
import EditForm from "../../components/forms/EditForm";

function EditAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // User info
  const { adminList, loading, success, error } = useSelector(
    (state) => state.admins
  );
  const currentAdmin = adminList.find((admin) => admin.id === id);

  // Form submission
  const formik = useFormik({
    initialValues: {
      fullName: currentAdmin ? currentAdmin.fullName : "",
      email: currentAdmin ? currentAdmin.email : "",
      phoneNumber: currentAdmin ? currentAdmin.phoneNumber : "",
    },
    onSubmit: (values, { resetForm }) => {
      const adminData = {
        id,
        fullName: values.fullName,
        email: values.email,
        phoneNumber: values.phoneNumber,
      };
      dispatch(updateAdminInfo(adminData));
      resetForm();
    },
  });

  // UseEffect that checks for the success state and then navigates the user
  useEffect(() => {
    if (!loading && success) {
      toast.success("Admin updated!");
      navigate("/admin");
    }
    if (error) {
      toast.error(error.message);
    }
  }, [loading, navigate, success, error]);

  return (
    <div className="card max-w-lg shadow-lg h-max p-3 m-auto mt-10">
      <div className="card-body">
        <h2 className="card-title">
          Edit Admin ({currentAdmin.fullName})
          <Link to="/admin" className=" underline hover:text-blue-500">
            Go Back
          </Link>
        </h2>
        {/* Form with loader */}
        {loading ? <Spinner /> : <EditForm formik={formik} />}
      </div>
    </div>
  );
}

export default EditAdmin;
