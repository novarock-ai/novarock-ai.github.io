import { ChevronRight, Cpu, Shield, Zap, Globe, Users, BarChart3, Settings, Mail, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import './App.css'

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([])
  
  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

const TypingAnimation = ({ text, className }: { text: string, className?: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-8 bg-blue-400 ml-1"
      />
    </span>
  )
}

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "多租户一键开启",
      description: "每个租户完全拥有自己的原生集群，最大化灵活利用算力资源"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "MPI & DDP 作业体系",
      description: "包括Gang调度、优先级抢占、拓扑感知调度、实时监控等数十项特色能力"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "持久化开发机",
      description: "功能强大的Workbench，支持优先级调度、WebShell、AI IDE直链等"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "GPU资源大盘",
      description: "直接查看所有GPU资源分配情况，有效管理和协调GPU分配"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "智能安全防护",
      description: "支持SSO登录、SSH Key管理、系统审计、AI智能检测恶意挖矿"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "IB网络治理",
      description: "包括IB硬件健康预警、带宽检测、GPU烧卡预警等完整治理体系"
    }
  ]

  const solutions = [
    {
      title: "智算中心租售场景",
      description: "弥补智算中心和客户之间的平台层GAP，提供完整的算力纳管方案",
      price: "基础包 30万起"
    },
    {
      title: "大模型预训练场景",
      description: "以H卡和B卡为主，8-100台规模的新兴模型企业训练场景",
      price: "训练包 +20万"
    },
    {
      title: "大模型推理场景",
      description: "以4090、5090以及A卡L卡为主的广泛企业推理场景",
      price: "推理包 +10万"
    },
    {
      title: "国产算力应用",
      description: "以国产算力为核心的信创场景建设",
      price: "定制报价"
    }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
        animate={{
          background: [
            "linear-gradient(45deg, #1e40af, #7c3aed, #1e40af)",
            "linear-gradient(90deg, #7c3aed, #1e40af, #7c3aed)",
            "linear-gradient(135deg, #1e40af, #7c3aed, #1e40af)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50 bg-slate-900/80 backdrop-blur-sm border-b border-blue-500/20"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img 
                src="/novarock-logo.jpeg" 
                alt="NovaRock Logo" 
                className="h-12 w-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div>
                <h1 className="text-2xl font-bold text-white">NovaRock</h1>
                <p className="text-sm text-blue-300">新星石（北京）科技有限公司</p>
              </div>
            </motion.div>
            <nav className="hidden md:flex items-center space-x-8">
              {['首页', '产品', '解决方案', '关于我们', '联系我们'].map((item, index) => (
                <motion.a 
                  key={item}
                  href={`#${['home', 'product', 'solutions', 'about', 'contact'][index]}`}
                  className="text-white hover:text-blue-300 transition-colors relative"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden min-h-screen flex items-center">
        {/* Dynamic floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300">
                <Sparkles className="w-4 h-4 mr-2" />
                面向智算中心的通用大模型训推一体平台
              </Badge>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <motion.span
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Alchemy
                </motion.span>
                <motion.span 
                  className="block text-3xl md:text-4xl text-blue-300 mt-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <TypingAnimation text="重新定义算力平台" />
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              专为智算中心设计的大模型训练平台，提供极致的客户体验和完整的算力管理解决方案。
              支撑千卡H100级别关键客户，已在多个智算中心稳定落地。
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 relative overflow-hidden group"
                  onClick={() => window.open('https://novarock.feishu.cn/share/base/form/shrcnu14xy4myHwwgFSMB2Xx6Tf', '_blank')}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  立即体验
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-blue-500 text-blue-300 hover:bg-blue-500/10 px-8 py-3 backdrop-blur-sm relative overflow-hidden group"
                  onClick={() => window.open('https://novarock.feishu.cn/share/base/form/shrcnu14xy4myHwwgFSMB2Xx6Tf', '_blank')}
                >
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  了解更多
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section id="product" className="py-20 bg-slate-800/50 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, #06b6d4 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              核心功能特性
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              最小化智算中心负担，最大化算力客户的全面性能、体验和灵活性
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="perspective-1000"
              >
                <Card className="bg-slate-900/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group h-full">
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "linear-gradient(45deg, transparent, #3b82f6, transparent)",
                      padding: "1px",
                    }}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 2, ease: "linear" }}
                  >
                    <div className="w-full h-full bg-slate-900/50 rounded-lg" />
                  </motion.div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="p-3 bg-blue-500/20 rounded-lg text-blue-300 relative"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 360,
                          backgroundColor: "rgba(59, 130, 246, 0.3)"
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {feature.icon}
                        <motion.div
                          className="absolute inset-0 bg-blue-400/20 rounded-lg"
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1.2, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                      <CardTitle className="text-white group-hover:text-blue-300 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 relative overflow-hidden">
        {/* Animated mesh background */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundImage: [
              "linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #8b5cf6 75%), linear-gradient(-45deg, transparent 75%, #8b5cf6 75%)",
              "linear-gradient(45deg, #8b5cf6 25%, transparent 25%), linear-gradient(-45deg, #8b5cf6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #06b6d4 75%), linear-gradient(-45deg, transparent 75%, #06b6d4 75%)",
              "linear-gradient(45deg, #06b6d4 25%, transparent 25%), linear-gradient(-45deg, #06b6d4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #3b82f6 75%), linear-gradient(-45deg, transparent 75%, #3b82f6 75%)",
            ]
          }}
          style={{
            backgroundSize: "40px 40px",
            backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px"
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              解决方案
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              覆盖智算中心租售、大模型训练推理、国产算力应用等多种场景
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="perspective-1000"
              >
                <Card className="bg-slate-900/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden group h-full">
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0.8, rotate: -10 }}
                    whileHover={{ scale: 1.1, rotate: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Floating price badge */}
                  <motion.div
                    className="absolute top-4 right-4 z-20"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                    }}
                  >
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 backdrop-blur-sm">
                      {solution.price}
                    </Badge>
                  </motion.div>
                  
                  <CardHeader className="relative z-10 pb-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    >
                      <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors pr-20">
                        {solution.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    >
                      <CardDescription className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                        {solution.description}
                      </CardDescription>
                    </motion.div>
                  </CardContent>
                  
                  {/* Hover shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">关于我们</h2>
              <p className="text-xl text-gray-300">
                新星石（北京）科技有限公司
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">团队优势</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-300 mt-1" />
                    <p className="text-gray-300">
                      团队成员均来自前沿大模型训练领军企业，对基础算力供需双侧有深入实践和理解
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-6 h-6 text-blue-300 mt-1" />
                    <p className="text-gray-300">
                      从2017年全部进入AI赛道的第一批产品和架构老将，始终活跃在AI算力平台前沿
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-blue-300 mt-1" />
                    <p className="text-gray-300">
                      主要面向亚太地区为各国智算中心提供客户对接方案
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-900/50 p-8 rounded-lg border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">NovaRock 品牌含义</h3>
                <div className="space-y-3 text-gray-300">
                  <p><strong className="text-blue-300">Nova:</strong> 直接对应"新星"，代表爆发性的创新和璀璨的未来</p>
                  <p><strong className="text-blue-300">Rock:</strong> 直接对应"石"，代表稳固、可靠和基石般的地位</p>
                  <p><strong className="text-blue-300">组合效果:</strong> "NovaRock"现代、有力且易于记忆，完美传达科技公司属性</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">联系我们</h2>
            <p className="text-xl text-gray-300 mb-12">
              开启您的智算中心数字化转型之旅
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center space-y-3">
                <div className="p-4 bg-blue-500/20 rounded-full">
                  <Mail className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-white font-semibold">商务合作</h3>
                <p className="text-gray-300">sales@novarock.io</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="p-4 bg-blue-500/20 rounded-full">
                  <Globe className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-white font-semibold">官方网站</h3>
                <p className="text-gray-300">www.novarock.io</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="p-4 bg-blue-500/20 rounded-full">
                  <Settings className="w-8 h-8 text-blue-300" />
                </div>
                <h3 className="text-white font-semibold">产品平台</h3>
                <p className="text-gray-300">alchemy.novarock.io</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
              立即咨询
              <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-blue-500/20 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src="/novarock-logo.jpeg" alt="NovaRock Logo" className="h-8 w-auto" />
              <div>
                <p className="text-white font-semibold">新星石（北京）科技有限公司</p>
                <p className="text-gray-400 text-sm">NovaRock (Beijing) Technology Co., Ltd.</p>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 NovaRock. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
