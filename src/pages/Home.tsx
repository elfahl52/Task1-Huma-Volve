import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Table from '../components/ui/Table';
import { useAppStore } from '../store';

export default function Home() {
  const { isAuthenticated, user, login, logout } = useAppStore();

  // بيانات مثال للـ Table
  const studentsData = [
    { name: "Ahmed Mohamed", age: 20, city: "Cairo" },
    { name: "Sara Ali", age: 22, city: "Alexandria" },
    { name: "Mohamed Hassan", age: 21, city: "Giza" },
    { name: "Fatma Ibrahim", age: 19, city: "Cairo" },
  ];

  const productsData = [
    { product: "Laptop", price: "$1200", stock: "15" },
    { product: "Mouse", price: "$25", stock: "50" },
    { product: "Keyboard", price: "$75", stock: "30" },
  ];

  const handlePrimaryClick = () => {
    alert('Primary button clicked!');
  };

  const handleSecondaryClick = () => {
    alert('Secondary button clicked!');
  };

  const handleDangerClick = () => {
    alert('Danger button clicked!');
  };

  return (
    <div className="container mx-auto p-8 space-y-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Reusable Components Demo
        </h1>
        <p className="text-xl text-gray-600">
          Demonstrating Button, Card, and Table components with different props
        </p>
      </div>

      {/* Button Examples */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Button Component</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            text="Primary Button" 
            onClick={handlePrimaryClick} 
            variant="primary" 
          />
          <Button 
            text="Secondary Button" 
            onClick={handleSecondaryClick} 
            variant="secondary" 
          />
          <Button 
            text="Danger Button" 
            onClick={handleDangerClick} 
            variant="danger" 
          />
          <Button 
            text="Disabled Button" 
            onClick={() => {}} 
            variant="primary" 
            disabled={true} 
          />
        </div>
      </section>

      {/* Card Examples */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Card Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - مع صورة */}
          <Card 
            title="React Course"
            description="Learn React from scratch with hands-on projects and real-world examples."
            image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
          >
            <Button text="Enroll Now" onClick={handlePrimaryClick} variant="primary" />
          </Card>

          {/* Card 2 - مع صورة */}
          <Card 
            title="TypeScript Basics"
            description="Master TypeScript and write type-safe code for your applications."
            image="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400"
          >
            <div className="flex gap-2">
              <Button text="Learn More" onClick={handleSecondaryClick} variant="secondary" />
            </div>
          </Card>

          {/* Card 3 - بدون صورة ومع children */}
          <Card 
            title="Assignment 2"
            description="Complete the reusable components assignment with proper props."
          >
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Requirements:</p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Button Component</li>
                <li>Card Component</li>
                <li>Table Component</li>
              </ul>
              <Button text="Start Assignment" onClick={handlePrimaryClick} variant="primary" />
            </div>
          </Card>
        </div>
      </section>

      {/* Table Examples */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Table Component</h2>
        
        {/* Table 1 - Students */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Students List</h3>
          <Table 
            columns={["Name", "Age", "City"]}
            data={studentsData}
            striped={true}
          />
        </div>

        {/* Table 2 - Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products Inventory</h3>
          <Table 
            columns={["Product", "Price", "Stock"]}
            data={productsData}
            striped={false}
          />
        </div>
      </section>

      {/* Auth Buttons */}
      <section className="border-t pt-8">
        {isAuthenticated ? (
          <div className="text-center">
            <p className="mb-4 text-lg">Welcome, {user?.name}!</p>
            <Button 
              text="Logout" 
              onClick={logout} 
              variant="danger" 
            />
          </div>
        ) : (
          <div className="text-center">
            <Button 
              text="Login" 
              onClick={() => login({ name: 'User' })} 
              variant="primary" 
            />
          </div>
        )}
      </section>
    </div>
  );
}