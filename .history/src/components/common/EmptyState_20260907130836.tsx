 interface  EmptyStateProps { 
     message?: string;
     icon?: string;
 }
function EmptyState({ message, icon }: EmptyStateProps) {
  return (
    <div>
        {icon && <span className="text-4xl mb-4">{icon}</span>}
        <h2 className="text-2xl font-semibold mb-4">{message || "No Data Available"}</h2>
    </div>
  )
}

export default EmptyState
