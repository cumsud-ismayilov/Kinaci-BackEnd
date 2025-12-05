import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

function VerifyPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/verify/${token}`);
        const data = await res.json();

        if (res.ok) {
          toast.success(data.message);
          navigate("/"); // təsdiqdən sonra login səhifəsinə yönləndir
        } else {
          toast.error(data.message);
          navigate("/");
        }
      } catch (err) {
        toast.error("Server xətası");
        navigate("/");
      }
    };

    verifyEmail();
  }, [token]);

  return <div>Hesabınız təsdiqlənir, xahiş olunur gözləyin...</div>;
}

export default VerifyPage;
