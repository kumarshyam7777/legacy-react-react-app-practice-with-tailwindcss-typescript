import { useState } from "react";

const Form: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && age) {
            console.log("Name:", name);
            console.log("Age:", age);
            setSubmitted(true);
            setTimeout(() => {
                setName("");
                setAge("");
                setSubmitted(false);
            }, 2000);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                    Welcome Back
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Please fill in your details below
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
                            required
                        />
                    </div>

                    {/* Age Input */}
                    <div>
                        <label htmlFor="age" className="block text-sm font-semibold text-gray-700 mb-2">
                            Age
                        </label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Enter your age"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-200"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {submitted ? "✓ Submitted!" : "Submit"}
                    </button>
                </form>

                {/* Success Message */}
                {submitted && (
                    <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
                        <p className="text-green-700 font-semibold">
                            ✓ Thank you, {name}! We've received your information.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form