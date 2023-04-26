function LoginLogs({ logs }) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Login Logs</h2>
        <ul className="divide-y">
          {logs.map((log) => (
            <li key={log.id} className="py-2">
              <div className="flex items-center justify-between">
                <span className="mr-2">{log.user}</span>
                <span className="text-gray-500 text-sm">{log.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default LoginLogs;
  