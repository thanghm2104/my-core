import Link from "next/link";

import { userService } from "services";

export default Home;

function Home() {
  return (
    <div className="p-4">
      <div className="container">
        <h1>Hi {userService.userValue?.firstName}!</h1>
        <p>Wellcome to T68</p>
        <p>
          <Link href="/users">Manage Users</Link>
        </p>
      </div>
    </div>
  );
}
