import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';
import { articleStore, Article } from '@/lib/article-store';

export function ArticleManager() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingArticle, setEditingArticle] = useState<Article | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        category: 'LIFESTYLE',
        img: '',
        content: '',
    });

    useEffect(() => {
        loadArticles();
    }, []);

    const loadArticles = () => {
        const data = articleStore.getArticles();
        setArticles(data);
    };

    const handleCreate = () => {
        setIsEditing(true);
        setEditingArticle(null);
        setFormData({
            title: '',
            excerpt: '',
            category: 'LIFESTYLE',
            img: '',
            content: '',
        });
    };

    const handleEdit = (article: Article) => {
        setIsEditing(true);
        setEditingArticle(article);
        setFormData({
            title: article.title,
            excerpt: article.excerpt,
            category: article.category,
            img: article.img,
            content: article.content || '',
        });
    };

    const handleSave = () => {
        if (editingArticle) {
            // Update existing
            articleStore.updateArticle(editingArticle.id, formData);
        } else {
            // Create new
            articleStore.createArticle(formData);
        }

        loadArticles();
        setIsEditing(false);
        setEditingArticle(null);
    };

    const handleDelete = (id: string) => {
        if (confirm('Are you sure you want to delete this article?')) {
            articleStore.deleteArticle(id);
            loadArticles();
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditingArticle(null);
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="font-serif text-3xl text-white">Article Management</h2>
                    <p className="text-white/60 text-sm mt-2">Create and manage blog posts and articles</p>
                </div>
                {!isEditing && (
                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 px-6 py-3 bg-[#FFC83D] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold rounded-[4px] hover:bg-white transition-all"
                    >
                        <Plus size={16} />
                        New Article
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6">
                    <h3 className="text-white font-bold uppercase tracking-widest text-xs">
                        {editingArticle ? 'Edit Article' : 'New Article'}
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FFC83D]"
                                placeholder="Article title"
                            />
                        </div>

                        <div>
                            <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Excerpt</label>
                            <textarea
                                value={formData.excerpt}
                                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FFC83D] min-h-[100px]"
                                placeholder="Brief description"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Category</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FFC83D]"
                                >
                                    <option value="LIFESTYLE">LIFESTYLE</option>
                                    <option value="PSYCHOLOGY">PSYCHOLOGY</option>
                                    <option value="WELLNESS">WELLNESS</option>
                                    <option value="SPIRITUALITY">SPIRITUALITY</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Image URL</label>
                                <input
                                    type="text"
                                    value={formData.img}
                                    onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FFC83D]"
                                    placeholder="https://..."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">Content (Optional)</label>
                            <textarea
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#FFC83D] min-h-[200px]"
                                placeholder="Full article content..."
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleSave}
                            disabled={!formData.title || !formData.excerpt}
                            className="flex items-center gap-2 px-6 py-3 bg-[#FFC83D] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold rounded hover:bg-white transition-all disabled:opacity-50"
                        >
                            <Save size={16} />
                            Save Article
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold rounded hover:bg-white/20 transition-all"
                        >
                            <X size={16} />
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    {articles.length === 0 ? (
                        <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center">
                            <p className="text-white/60 mb-4">No articles yet</p>
                            <button
                                onClick={handleCreate}
                                className="px-6 py-3 bg-[#FFC83D] text-[#1A1A1A] text-[10px] uppercase tracking-widest font-bold rounded hover:bg-white transition-all"
                            >
                                Create Your First Article
                            </button>
                        </div>
                    ) : (
                        articles.map((article) => (
                            <div key={article.id} className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start gap-6">
                                {article.img && (
                                    <div className="w-32 h-32 shrink-0 rounded overflow-hidden bg-white/5">
                                        <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div>
                                            <span className="text-[#FFC83D] text-[10px] uppercase tracking-widest font-bold">{article.category}</span>
                                            <h3 className="text-white font-serif text-xl mt-1">{article.title}</h3>
                                        </div>
                                        <div className="flex gap-2 shrink-0">
                                            <button
                                                onClick={() => handleEdit(article)}
                                                className="p-2 text-white/60 hover:text-white transition-colors"
                                            >
                                                <Edit2 size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(article.id)}
                                                className="p-2 text-white/60 hover:text-red-400 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-sm line-clamp-2">{article.excerpt}</p>
                                    <p className="text-white/40 text-xs mt-2">
                                        Updated: {new Date(article.updatedAt).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
