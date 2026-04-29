import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./ContactForm.css";

interface RedirectProps {
  isSent: boolean;
}

export default function Redirect({ isSent }: RedirectProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSent) return;
    const timeoutNavigate = setTimeout(() => {
      navigate("/", { replace: true });
    }, 10000);

    return () => clearTimeout(timeoutNavigate);
  }, [isSent]);
  return (
    <div className="redirect-container">
      <h2 className="redirect-inner">
        Sendt! Vi setter pris på tilbakemelding og hendvendelser. Omdirigerer
        til forsiden...
      </h2>
    </div>
  );
}
