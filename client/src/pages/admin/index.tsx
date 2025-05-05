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
                  <CardHeader className="bg-green-50 border-b border-green-100">
                    <CardTitle className="flex items-center">
                      <Settings className="mr-2 h-5 w-5" /> Configurações do Site
                    </CardTitle>
                    <CardDescription>Ajuste as configurações gerais do site</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="site-name">Nome do Site</Label>
                        <Input 
                          id="site-name"
                          defaultValue="STELOOS"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="site-slogan">Slogan</Label>
                        <Input 
                          id="site-slogan"
                          defaultValue="Estórias que encantam o coração infantil"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email de Contato</Label>
                        <Input 
                          id="contact-email"
                          type="email"
                          defaultValue="contact@steloos.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="stories-per-page">Estórias por Página</Label>
                        <Select defaultValue="12">
                          <SelectTrigger id="stories-per-page">
                            <SelectValue placeholder="Selecione a quantidade" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="8">8 estórias</SelectItem>
                            <SelectItem value="12">12 estórias</SelectItem>
                            <SelectItem value="16">16 estórias</SelectItem>
                            <SelectItem value="24">24 estórias</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button className="w-full">Salvar Configurações</Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Configurações de SEO (Português e Inglês) */}
                <div className="grid gap-6 md:grid-cols-2">
                  {/* SEO Português */}
                  <Card>
                    <CardHeader className="bg-blue-50 border-b border-blue-100">
                      <CardTitle className="flex items-center">
                        <span className="mr-2">🇧🇷</span> Configurações de SEO (Português)
                      </CardTitle>
                      <CardDescription>Otimize o site para mecanismos de busca (versão em português)</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="pt-meta-title">Meta Título</Label>
                          <Input 
                            id="pt-meta-title"
                            defaultValue="STELOOS - Estórias para Crianças" 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="pt-meta-description">Meta Descrição</Label>
                          <Textarea 
                            id="pt-meta-description"
                            rows={3}
                            defaultValue="Estórias infantis que transmitem valores de amor, paz, sabedoria e bondade de forma lúdica e educativa."
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="pt-keywords">Palavras-chave</Label>
                          <Input 
                            id="pt-keywords"
                            defaultValue="estórias infantis, contos para crianças, valores, educação infantil"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2 pt-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="pt-robots" defaultChecked />
                            <Label htmlFor="pt-robots" className="text-sm">Permitir indexação por buscadores</Label>
                          </div>
                        </div>
                        
                        <Button className="w-full">Salvar SEO em Português</Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* SEO Inglês */}
                  <Card>
                    <CardHeader className="bg-red-50 border-b border-red-100">
                      <CardTitle className="flex items-center">
                        <span className="mr-2">🇺🇸</span> SEO Settings (English)
                      </CardTitle>
                      <CardDescription>Optimize the site for search engines (English version)</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="en-meta-title">Meta Title</Label>
                          <Input 
                            id="en-meta-title"
                            defaultValue="STELOOS - Stories for Children" 
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="en-meta-description">Meta Description</Label>
                          <Textarea 
                            id="en-meta-description"
                            rows={3}
                            defaultValue="Children's stories that convey values of love, peace, wisdom and kindness in a playful and educational way."
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="en-keywords">Keywords</Label>
                          <Input 
                            id="en-keywords"
                            defaultValue="children's stories, stories for kids, values, children's education"
                          />
                        </div>
                        
                        <div className="flex items-center space-x-2 pt-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="en-robots" defaultChecked />
                            <Label htmlFor="en-robots" className="text-sm">Allow indexing by search engines</Label>
                          </div>
                        </div>
                        
                        <Button className="w-full">Save English SEO</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Integração com Redes Sociais */}
                <Card>
                  <CardHeader className="bg-purple-50 border-b border-purple-100">
                    <CardTitle className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      Redes Sociais
                    </CardTitle>
                    <CardDescription>Configure a integração com redes sociais</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="facebook-url">URL do Facebook</Label>
                        <Input 
                          id="facebook-url"
                          type="url" 
                          placeholder="https://facebook.com/steloos"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="instagram-url">URL do Instagram</Label>
                        <Input 
                          id="instagram-url"
                          type="url" 
                          placeholder="https://instagram.com/steloos"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="youtube-url">URL do YouTube</Label>
                        <Input 
                          id="youtube-url"
                          type="url" 
                          placeholder="https://youtube.com/@steloos"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Botões de Compartilhamento</Label>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="share-fb" defaultChecked />
                            <Label htmlFor="share-fb" className="text-sm">Facebook</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="share-tw" defaultChecked />
                            <Label htmlFor="share-tw" className="text-sm">Twitter</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="share-wa" defaultChecked />
                            <Label htmlFor="share-wa" className="text-sm">WhatsApp</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="share-tg" />
                            <Label htmlFor="share-tg" className="text-sm">Telegram</Label>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full">Salvar Configurações Sociais</Button>
                    </form>
                  </CardContent>
                </Card>
                
                {/* Configurações de Idioma */}
                <Card>
                  <CardHeader className="bg-yellow-50 border-b border-yellow-100">
                    <CardTitle className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                      Configurações de Idioma
                    </CardTitle>
                    <CardDescription>Gerencie as opções de idioma do site</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="default-language">Idioma Padrão</Label>
                        <Select defaultValue="pt-BR">
                          <SelectTrigger id="default-language">
                            <SelectValue placeholder="Selecione o idioma padrão" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                            <SelectItem value="en">Inglês</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Idiomas Disponíveis</Label>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="lang-pt" defaultChecked disabled />
                            <Label htmlFor="lang-pt" className="text-sm">
                              <span className="mr-2">🇧🇷</span>Português (Brasil)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="lang-en" defaultChecked />
                            <Label htmlFor="lang-en" className="text-sm">
                              <span className="mr-2">🇺🇸</span>Inglês
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="lang-es" />
                            <Label htmlFor="lang-es" className="text-sm">
                              <span className="mr-2">🇪🇸</span>Espanhol
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="lang-fr" />
                            <Label htmlFor="lang-fr" className="text-sm">
                              <span className="mr-2">🇫🇷</span>Francês
                            </Label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 pt-2">
                        <div className="flex flex-row items-center space-x-3">
                          <Switch id="auto-detect" defaultChecked />
                          <Label htmlFor="auto-detect">Ativar detecção automática de idioma</Label>
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