"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Calendar, Code, BookOpen, Server, ExternalLink, AlertCircle, Loader } from 'lucide-react';
import axios from 'axios';

const Timeline = () => {
  const [timelineData, setTimelineData] = useState<any>(null);
  const [expandedYears, setExpandedYears] = useState<any>({});
  const [expandedProjects, setExpandedProjects] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string|null>(null);
  useEffect(() => {
    const fetchJourneyData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${location.origin}/api/journey`);
        setTimelineData(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching journey data:', err);
        setError('Unable to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchJourneyData();
  }, []);
  const toggleYear = (year: any) => {
    setExpandedYears((prev: any) => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const toggleProject = (projectKey: string) => {
    setExpandedProjects((prev: any) => ({
      ...prev,
      [projectKey]: !prev[projectKey]
    }));
  };

  const getLanguageColor = (language: string) => {
    const colors: any = {
      'JavaScript': 'bg-yellow-100 text-yellow-800',
      'TypeScript': 'bg-blue-100 text-blue-800',
      'Python': 'bg-green-100 text-green-800',
      'Java': 'bg-orange-100 text-orange-800',
      'C': 'bg-gray-100 text-gray-800',
      'C++': 'bg-purple-100 text-purple-800',
      'C#': 'bg-indigo-100 text-indigo-800',
      'HTML': 'bg-red-100 text-red-800',
      'CSS': 'bg-pink-100 text-pink-800',
      'React': 'bg-cyan-100 text-cyan-800',
      'Rust': 'bg-amber-100 text-amber-800',
      'Ruby': 'bg-rose-100 text-rose-800',
      'PHP': 'bg-violet-100 text-violet-800',
      'SQL': 'bg-teal-100 text-teal-800',
    };
    return colors[language] || 'bg-gray-100 text-gray-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-300" />
          <p className="text-gray-300">Loading CS Journey Timeline...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertCircle className="w-12 h-12 text-red-200 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-100 mb-2">Error Loading Data</h2>
          <p className="text-gray-200 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-200 text-white rounded-lg hover:bg-blue-300 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!timelineData) {
    return null;
  }

  const years = Object.keys(timelineData.timeline).sort();

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-200 mb-4">Computer Science Journey</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{timelineData.purpose}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-300"></div>
          
          {years.map((year: string, index: number)  => {
            const yearData = timelineData.timeline[year];
            const isExpanded = expandedYears[year];
            
            return (
              <div key={year} className="relative mb-8">
                {/* Year marker */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Year content */}
                <div className="ml-16">
                  <div 
                    className="bg-gray-700 rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => toggleYear(year)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-6 h-6 text-blue-300" />
                        <h2 className="text-2xl font-bold text-gray-200">{year}</h2>
                        {isExpanded ? 
                          <ChevronDown className="w-5 h-5 text-gray-300" /> : 
                          <ChevronRight className="w-5 h-5 text-gray-300" />
                        }
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-200">
                          {yearData.projects?.length || 0} projects • {yearData.courses?.length || 0} courses
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mt-2 font-medium">{yearData.desc}</p>
                    
                    {/* Languages used this year */}
                    {yearData.languages && yearData.languages.length > 0 && (
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {yearData.languages.map((lang: string, i: number) => (
                            <span 
                              key={i} 
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getLanguageColor(lang)}`}
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="mt-4 space-y-4">
                      {/* Courses */}
                      {yearData.courses && yearData.courses.length > 0 && (
                        <div className="bg-green-900 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <BookOpen className="w-5 h-5 text-green-200" />
                            <h3 className="font-semibold text-green-300">Courses</h3>
                          </div>
                          <ul className="space-y-1">
                            {yearData.courses.map((course: string, i: number) => (
                              <li key={i} className="text-green-100">{course}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Projects */}
                      {yearData.projects && yearData.projects.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <Code className="w-5 h-5 text-purple-300" />
                            <h3 className="font-semibold text-purple-300">Projects</h3>
                          </div>
                          
                          {yearData.projects.map((project: any, i: number) => {
                            const projectKey = `${year}-${i}`;
                            const isProjectExpanded = expandedProjects[projectKey];
                            
                            return (
                              <div key={i} className="bg-gray-800 rounded-lg p-4">
                                <div 
                                  className="flex items-center justify-between cursor-pointer"
                                  onClick={() => toggleProject(projectKey)}
                                >
                                  <div className="flex items-center space-x-2">
                                    <h4 className="font-medium text-purple-300">{project.name}</h4>
                                    {project.link && project.link !== "" && project.link !== "#" && (
                                      <ExternalLink className="w-4 h-4 text-purple-300" />
                                    )}
                                  </div>
                                  {isProjectExpanded ? 
                                    <ChevronDown className="w-4 h-4 text-purple-300" /> : 
                                    <ChevronRight className="w-4 h-4 text-purple-300" />
                                  }
                                </div>
                                
                                {isProjectExpanded && (
                                  <div className="mt-3 space-y-3">
                                    <p className="text-purple-300 text-sm leading-relaxed">{project.desc}</p>
                                    
                                    {project.languages && project.languages.length > 0 && (
                                      <div className="flex flex-wrap gap-1">
                                        {project.languages.map((lang: string, j: number) => (
                                          <span 
                                            key={j} 
                                            className={`px-2 py-1 rounded text-xs ${getLanguageColor(lang)}`}
                                          >
                                            {lang}
                                          </span>
                                        ))}
                                      </div>
                                    )}
                                    
                                    {project.link && project.link !== "" && project.link !== "#" && (
                                      <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-1 text-purple-300 hover:text-purple-400 text-sm"
                                      >
                                        <ExternalLink className="w-3 h-3" />
                                        <span>View Project</span>
                                      </a>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Frameworks and Hosting */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {yearData['frameworks/libraries'] && yearData['frameworks/libraries'].length > 0 && (
                          <div className="bg-blue-900 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Server className="w-4 h-4 text-blue-200" />
                              <h4 className="font-medium text-blue-200">Frameworks & Libraries</h4>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {yearData['frameworks/libraries'].map((fw: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-blue-700 text-blue-100 rounded text-xs">
                                  {fw}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {yearData['hosting systems'] && yearData['hosting systems'].length > 0 && (
                          <div className="bg-orange-900 rounded-lg p-4">
                            <div className="flex items-center space-x-2 mb-2">
                              <Server className="w-4 h-4 text-orange-200" />
                              <h4 className="font-medium text-orange-200">Hosting Systems</h4>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {yearData['hosting systems'].map((host: string, i: number) => (
                                <span key={i} className="px-2 py-1 bg-orange-700 text-orange-100 rounded text-xs">
                                  {host}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Timeline };
