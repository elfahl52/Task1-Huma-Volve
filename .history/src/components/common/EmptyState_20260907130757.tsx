 interface  EmptyStateProps { 
     message?: string;
     
 }
function EmptyState() {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-4">No Data Available</h2>
    </div>
  )
}

export default EmptyState
