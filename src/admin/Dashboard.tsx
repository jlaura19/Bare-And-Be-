import { AdminLayout } from './AdminLayout';
import { RSSManager } from './RSSManager';
import { ArticleManager } from './ArticleManager';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-10">
        {/* Welcome Section */}
        <div className="text-center space-y-4 py-10">
          <h2 className="font-serif text-5xl text-white italic">Welcome to the Dashboard</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Manage your podcast episodes, articles, and content from this central hub.
          </p>
        </div>

        {/* RSS Manager */}
        <RSSManager />

        {/* Article Management */}
        <ArticleManager />
      </div>
    </AdminLayout>
  );
}
