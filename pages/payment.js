import Navbar from "../components/Navbar";

export default function Home() {
  const basicPayment = async () => {
    const res = await initializeRazorpay();
    console.log("here...", res);
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay/basic", { method: "POST" }).then(
      (t) => t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Provast",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEhcsU1vPKc1A/company-logo_200_200/0/1656590853490?e=1686787200&v=beta&t=9DmQIdaWbTH_m8AtK1ZfBeDH86fjbCHWm1j9KTSP7mo",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Provast",
        email: "provast@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const essentialPayment = async () => {
    const res = await initializeRazorpay();
    console.log("here...", res);
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay/essential", {
      method: "POST",
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Provast",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEhcsU1vPKc1A/company-logo_200_200/0/1656590853490?e=1686787200&v=beta&t=9DmQIdaWbTH_m8AtK1ZfBeDH86fjbCHWm1j9KTSP7mo",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Provast",
        email: "provast@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const premiumPayment = async () => {
    const res = await initializeRazorpay();
    console.log("here...", res);
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const data = await fetch("/api/razorpay/premium", { method: "POST" }).then(
      (t) => t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Provast",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQEhcsU1vPKc1A/company-logo_200_200/0/1656590853490?e=1686787200&v=beta&t=9DmQIdaWbTH_m8AtK1ZfBeDH86fjbCHWm1j9KTSP7mo",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Provast",
        email: "provast@gmail.com",
        contact: "9999999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
      console.log("inside");
    });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="bg-orange-900 mt-20">
        <div className="max-w-2xl mx-auto py-6 px-4 sm:py-4 sm:px-6 lg:px-4 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="w-full">
              <h2 className="text-3xl font-extrabold text-white sm:text-3xl sm:tracking-tight lg:text-4xl">
                Pricing Plans
              </h2>
              <p className="mt-5 text-md text-white">
                Start building for free, then add a site plan to go live.
                Account plans unlock additional features.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-around m-4">
        <div className="my-4">
          <button
            onClick={basicPayment}
            className="bg-orange-600 font-semibold cursor-pointer block px-5 w-full sm:px-8 py-1 text-white h-10 rounded-md hover:bg-orange-700 "
          >
            Basic Plan
          </button>
          <div className="flex justify-items-center">
            <h1 className="text-2xl font-bold">₹129</h1>
            <p className="text-gray-600 pt-1.5">/year</p>
          </div>
        </div>
        <div className="my-4">
          <button
            onClick={essentialPayment}
            className="bg-orange-600 font-semibold cursor-pointer block px-5 w-full sm:px-8 py-1 text-white h-10 rounded-md hover:bg-orange-700"
          >
            Essential Plan
          </button>
          <div className="flex justify-items-center">
            <h1 className="text-2xl font-bold">₹179</h1>
            <p className="text-gray-600 pt-1.5">/year</p>
          </div>
        </div>
        <div className="my-4">
          <button
            onClick={premiumPayment}
            className="bg-orange-600 font-semibold cursor-pointer block px-5 w-full sm:px-8 py-1 text-white h-10 rounded-md hover:bg-orange-700"
          >
            Premium Plan
          </button>
          <div className="flex justify-items-center">
            <h1 className="text-2xl font-bold">₹259</h1>
            <p className="text-gray-600 pt-1.5">/year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
