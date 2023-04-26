function Subscribers({ subscribers }) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Subscribers</h2>
        <ul className="divide-y">
          {subscribers.map((subscriber) => (
            <li key={subscriber.id} className="py-2">
              <div className="flex items-center justify-between">
                <span className="mr-2">{subscriber.email}</span>
                <span className="text-gray-500 text-sm">{subscriber.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Subscribers;
  