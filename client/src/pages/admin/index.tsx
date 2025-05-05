import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'wouter';
import { 
  BarChart, 
  FileText, 
  FolderOpenDot, 
  Home,
  LayoutDashboard, 
  LogOut, 
  MailCheck, 
  Settings, 
  Users, 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import { useQuery } from '@tanstack/react-query';
import { getQueryFn } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Story, Category, NewsletterSubscriber } from '@shared/schema';

export default function AdminDashboard() {
  const { t } = useTranslation();
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');

  // Type definitions
  type SubscriberType = {
    id: number;
    email: string;
    createdAt?: string;
  };

  // Queries
  const { data: stories = [] } = useQuery<Story[]>({ 
    queryKey: ['/api/stories'],
    queryFn: getQueryFn({ on401: 'throw' })
  });
  
  const { data: categories = [] } = useQuery<Category[]>({ 
    queryKey: ['/api/categories'],
    queryFn: getQueryFn({ on401: 'throw' })
  });
  
  // Buscar assinantes da newsletter
  const { data: subscribers = [] } = useQuery<SubscriberType[]>({ 
    queryKey: ['/api/newsletter/subscribers'],
    queryFn: getQueryFn({ on401: 'throw' })
  });

  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'dashboard') {
      setLocation('/admin');
    } else {
      setLocation(`/admin/${value}`);
    }
  };

  // Determine active tab from URL
  useEffect(() => {
    if (location === '/admin') {
      setActiveTab('dashboard');
    } else if (location === '/admin/stories') {
      setActiveTab('stories');
    } else if (location === '/admin/categories') {
      setActiveTab('categories');
    } else if (location === '/admin/subscribers') {
      setActiveTab('subscribers');
    } else if (location === '/admin/settings') {
      setActiveTab('settings');
    }
  }, [location]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-4 border-b">
          <Link href="/">
            <a className="text-xl font-bold text-primary flex items-center">
              <Home className="h-5 w-5 mr-2" />
              {t('app.name')}
            </a>
          </Link>
          <p className="text-sm text-gray-500 mt-1">{t('admin.navigation')}</p>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            <Button 
              variant={activeTab === 'dashboard' ? 'default' : 'ghost'} 
              className="w-full justify-start mb-1" 
              onClick={() => handleTabChange('dashboard')}
            >
              <LayoutDashboard className="h-4 w-4 mr-2" />
              {t('admin.dashboard')}
            </Button>
            
            <Button 
              variant={activeTab === 'stories' ? 'default' : 'ghost'} 
              className="w-full justify-start mb-1" 
              onClick={() => handleTabChange('stories')}
            >
              <FileText className="h-4 w-4 mr-2" />
              {t('admin.stories')}
            </Button>
            
            <Button 
              variant={activeTab === 'categories' ? 'default' : 'ghost'} 
              className="w-full justify-start mb-1" 
              onClick={() => handleTabChange('categories')}
            >
              <FolderOpenDot className="h-4 w-4 mr-2" />
              {t('admin.categories')}
            </Button>
            
            <Button 
              variant={activeTab === 'subscribers' ? 'default' : 'ghost'} 
              className="w-full justify-start mb-1" 
              onClick={() => handleTabChange('subscribers')}
            >
              <MailCheck className="h-4 w-4 mr-2" />
              {t('admin.subscribers')}
            </Button>
            
            <Button 
              variant={activeTab === 'settings' ? 'default' : 'ghost'} 
              className="w-full justify-start mb-1" 
              onClick={() => handleTabChange('settings')}
            >
              <Settings className="h-4 w-4 mr-2" />
              {t('admin.settings')}
            </Button>
          </nav>
        </div>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start" onClick={() => setLocation('/')}>
            <LogOut className="h-4 w-4 mr-2" />
            {t('admin.logout')}
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 p-4">
          <h1 className="text-2xl font-bold text-gray-900">{t('admin.title')}</h1>
          <p className="text-gray-500">{t('admin.welcome')}</p>
        </header>

        <main className="p-6">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="mb-6 bg-white p-1 border rounded-md">
              <TabsTrigger value="dashboard">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                {t('admin.dashboard')}
              </TabsTrigger>
              <TabsTrigger value="stories">
                <FileText className="h-4 w-4 mr-2" />
                {t('admin.stories')}
              </TabsTrigger>
              <TabsTrigger value="categories">
                <FolderOpenDot className="h-4 w-4 mr-2" />
                {t('admin.categories')}
              </TabsTrigger>
              <TabsTrigger value="subscribers">
                <MailCheck className="h-4 w-4 mr-2" />
                {t('admin.subscribers')}
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="h-4 w-4 mr-2" />
                {t('admin.settings')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t('admin.stats.totalStories')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stories.length}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      <FileText className="inline h-3 w-3 mr-1" />
                      Estórias publicadas
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t('admin.stats.totalCategories')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{categories.length}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      <FolderOpenDot className="inline h-3 w-3 mr-1" />
                      Categorias ativas
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t('admin.stats.totalSubscribers')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{subscribers?.length || 0}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      <Users className="inline h-3 w-3 mr-1" />
                      Assinantes da newsletter
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Estórias em Destaque
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {stories.filter((story) => story.featured === true).length}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      <BarChart className="inline h-3 w-3 mr-1" />
                      Estórias destacadas
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('admin.stats.recentActivity')}</CardTitle>
                    <CardDescription>Atividades recentes no site</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Nova estória publicada</p>
                          <p className="text-xs text-gray-500">Há 3 dias</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <Users className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Novo assinante da newsletter</p>
                          <p className="text-xs text-gray-500">Há 5 dias</p>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <FolderOpenDot className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Nova categoria adicionada</p>
                          <p className="text-xs text-gray-500">Há 7 dias</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stories">
              <Card>
                <CardHeader>
                  <CardTitle>{t('admin.storiesManager.title')}</CardTitle>
                  <CardDescription>Gerencie todas as estórias do site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <Button className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      {t('admin.storiesManager.createNew')}
                    </Button>
                  </div>

                  <div className="border rounded-md">
                    <div className="grid grid-cols-12 gap-2 p-3 bg-gray-50 font-medium border-b">
                      <div className="col-span-1">{t('admin.storiesManager.id')}</div>
                      <div className="col-span-4">{t('admin.storiesManager.title')}</div>
                      <div className="col-span-2">{t('admin.storiesManager.category')}</div>
                      <div className="col-span-3">{t('admin.storiesManager.createdAt')}</div>
                      <div className="col-span-2">{t('admin.storiesManager.actions')}</div>
                    </div>

                    {stories.map((story) => (
                      <div key={story.id} className="grid grid-cols-12 gap-2 p-3 border-b items-center">
                        <div className="col-span-1 text-gray-500">{story.id}</div>
                        <div className="col-span-4 font-medium">{story.title}</div>
                        <div className="col-span-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {story.categoryId}
                          </span>
                        </div>
                        <div className="col-span-3 text-gray-500 text-sm">
                          {new Date().toLocaleDateString('pt-BR')}
                        </div>
                        <div className="col-span-2 flex space-x-2">
                          <Button variant="outline" size="sm">
                            {t('admin.storiesManager.edit')}
                          </Button>
                          <Button variant="destructive" size="sm">
                            {t('admin.storiesManager.delete')}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categories">
              <Card>
                <CardHeader>
                  <CardTitle>{t('admin.categoriesManager.title')}</CardTitle>
                  <CardDescription>Gerencie todas as categorias do site</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <Button className="flex items-center">
                      <FolderOpenDot className="h-4 w-4 mr-2" />
                      {t('admin.categoriesManager.createNew')}
                    </Button>
                  </div>

                  <div className="border rounded-md">
                    <div className="grid grid-cols-12 gap-2 p-3 bg-gray-50 font-medium border-b">
                      <div className="col-span-2">{t('admin.categoriesManager.id')}</div>
                      <div className="col-span-3">{t('admin.categoriesManager.name')}</div>
                      <div className="col-span-4">{t('admin.categoriesManager.description')}</div>
                      <div className="col-span-1">{t('admin.categoriesManager.storiesCount')}</div>
                      <div className="col-span-2">{t('admin.categoriesManager.actions')}</div>
                    </div>

                    {categories.map((category) => (
                      <div key={category.id} className="grid grid-cols-12 gap-2 p-3 border-b items-center">
                        <div className="col-span-2 text-gray-500">{category.id}</div>
                        <div className="col-span-3 font-medium">{category.name}</div>
                        <div className="col-span-4 text-sm text-gray-600">{category.description}</div>
                        <div className="col-span-1 text-center">
                          {stories.filter((story) => story.categoryId === category.id).length}
                        </div>
                        <div className="col-span-2 flex space-x-2">
                          <Button variant="outline" size="sm">
                            {t('admin.categoriesManager.edit')}
                          </Button>
                          <Button variant="destructive" size="sm">
                            {t('admin.categoriesManager.delete')}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="subscribers">
              <Card>
                <CardHeader>
                  <CardTitle>{t('admin.subscribersManager.title')}</CardTitle>
                  <CardDescription>Gerencie os assinantes da newsletter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between mb-4">
                    <Button variant="outline" className="flex items-center">
                      <BarChart className="h-4 w-4 mr-2" />
                      {t('admin.subscribersManager.exportCsv')}
                    </Button>
                  </div>

                  <div className="border rounded-md">
                    <div className="grid grid-cols-12 gap-2 p-3 bg-gray-50 font-medium border-b">
                      <div className="col-span-1">#</div>
                      <div className="col-span-6">{t('admin.subscribersManager.email')}</div>
                      <div className="col-span-3">{t('admin.subscribersManager.subscribedAt')}</div>
                      <div className="col-span-2">{t('admin.subscribersManager.actions')}</div>
                    </div>

                    {subscribers && subscribers.length > 0 ? (
                      subscribers.map((subscriber, index: number) => (
                        <div key={subscriber.id} className="grid grid-cols-12 gap-2 p-3 border-b items-center">
                          <div className="col-span-1 text-gray-500">{index + 1}</div>
                          <div className="col-span-6">{subscriber.email}</div>
                          <div className="col-span-3 text-gray-500 text-sm">
                            {new Date().toLocaleDateString('pt-BR')}
                          </div>
                          <div className="col-span-2">
                            <Button variant="destructive" size="sm">
                              {t('admin.subscribersManager.delete')}
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-6 text-center text-gray-500">
                        {t('admin.subscribersManager.noSubscribers')}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Configurações do Site */}
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações do Site</CardTitle>
                    <CardDescription>Ajuste as configurações gerais do site</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nome do Site</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          defaultValue="STELOOS"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Slogan</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          defaultValue="Estórias que encantam o coração infantil"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email de Contato</label>
                        <input 
                          type="email" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          defaultValue="contact@steloos.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Estórias por Página</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option value="8">8</option>
                          <option value="12" selected>12</option>
                          <option value="16">16</option>
                          <option value="24">24</option>
                        </select>
                      </div>
                      
                      <Button className="w-full">Salvar Configurações</Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Configurações de SEO */}
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações de SEO</CardTitle>
                    <CardDescription>Otimize o site para mecanismos de busca</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Meta Título</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          defaultValue="STELOOS - Estórias para Crianças"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Meta Descrição</label>
                        <textarea 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          rows={3}
                          defaultValue="Estórias infantis que transmitem valores de amor, paz, sabedoria e bondade de forma lúdica e educativa."
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Palavras-chave</label>
                        <input 
                          type="text" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          defaultValue="estórias infantis, contos para crianças, valores, educação infantil"
                        />
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-2">
                        <input 
                          type="checkbox" 
                          id="robots" 
                          className="h-4 w-4 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="robots" className="text-sm">Permitir indexação por buscadores</label>
                      </div>
                      
                      <Button className="w-full">Salvar Configurações SEO</Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Integração com Redes Sociais */}
                <Card>
                  <CardHeader>
                    <CardTitle>Redes Sociais</CardTitle>
                    <CardDescription>Configure a integração com redes sociais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">URL do Facebook</label>
                        <input 
                          type="url" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          placeholder="https://facebook.com/steloos"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">URL do Instagram</label>
                        <input 
                          type="url" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          placeholder="https://instagram.com/steloos"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">URL do YouTube</label>
                        <input 
                          type="url" 
                          className="w-full p-2 border border-gray-300 rounded-md" 
                          placeholder="https://youtube.com/@steloos"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Botões de Compartilhamento</label>
                        <div className="flex flex-wrap gap-2">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="share-fb" className="h-4 w-4" defaultChecked />
                            <label htmlFor="share-fb" className="text-sm">Facebook</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="share-tw" className="h-4 w-4" defaultChecked />
                            <label htmlFor="share-tw" className="text-sm">Twitter</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="share-wa" className="h-4 w-4" defaultChecked />
                            <label htmlFor="share-wa" className="text-sm">WhatsApp</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="share-tg" className="h-4 w-4" />
                            <label htmlFor="share-tg" className="text-sm">Telegram</label>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full">Salvar Configurações Sociais</Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Configurações de Idioma */}
                <Card>
                  <CardHeader>
                    <CardTitle>Configurações de Idioma</CardTitle>
                    <CardDescription>Gerencie as opções de idioma do site</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Idioma Padrão</label>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                          <option value="pt-BR" selected>Português (Brasil)</option>
                          <option value="en">Inglês</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Idiomas Disponíveis</label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="lang-pt" 
                              className="h-4 w-4"
                              defaultChecked
                              disabled
                            />
                            <label htmlFor="lang-pt" className="text-sm">Português (Brasil)</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="lang-en" 
                              className="h-4 w-4"
                              defaultChecked
                            />
                            <label htmlFor="lang-en" className="text-sm">Inglês</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="lang-es" 
                              className="h-4 w-4"
                            />
                            <label htmlFor="lang-es" className="text-sm">Espanhol</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input 
                              type="checkbox" 
                              id="lang-fr" 
                              className="h-4 w-4"
                            />
                            <label htmlFor="lang-fr" className="text-sm">Francês</label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Detecção Automática de Idioma</label>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="checkbox" 
                            id="auto-detect" 
                            className="h-4 w-4"
                            defaultChecked
                          />
                          <label htmlFor="auto-detect" className="text-sm">Ativar detecção automática baseada no navegador</label>
                        </div>
                      </div>
                      
                      <Button className="w-full">Salvar Configurações de Idioma</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}