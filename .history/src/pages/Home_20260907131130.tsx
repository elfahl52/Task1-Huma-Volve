import Button from '../components/ui/Button';
import { useAppStore } from '../store/appStore';

export default function Home() {
  const { isAuthenticated, login, logout } = useAppStore();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to React App</h1>
      <p className="text-gray-600 mb-6">This is a scalable React project structure.</p>
      
      {isAuthenticated ? (
        <Button onClick={logout} variant="secondary">Logout</Button>
      ) : (
        <Button onClick={() => login({ name: 'User' })}>Login</Button>
      )}
    </div>
  );
}