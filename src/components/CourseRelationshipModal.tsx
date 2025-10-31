import React from 'react';
import { X } from 'lucide-react';
import { Course, getPrerequisites, getCorequisites, courses } from '../data/courses.ts';

interface CourseRelationshipModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onCourseClick?: (course: Course) => void;
}

const CourseRelationshipModal: React.FC<CourseRelationshipModalProps> = ({ course, isOpen, onClose, onCourseClick }) => {
  if (!isOpen || !course) return null;

  const prerequisites = getPrerequisites(course.id);
  const followingCourses = courses.filter(c => getPrerequisites(c.id).some(prereq => prereq.id === course.id));
  
  // Get indirect prerequisites (prerequisites of prerequisites)
  const indirectPrerequisites = prerequisites.flatMap(prereq => {
    const prereqPrerequisites = getPrerequisites(prereq.id);
    return prereqPrerequisites.filter(indirectPrereq => 
      !prerequisites.some(directPrereq => directPrereq.id === indirectPrereq.id)
    );
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black shadow-brutal-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b-4 border-black p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-black">{course.code}</h2>
              <p className="text-sm font-bold text-black">{course.name}</p>
              {course.specializations && course.specializations.length > 0 && (
                <div className="flex gap-1 mt-1">
                  {course.specializations.map((spec, index) => (
                    <span key={index} className="px-1 py-0.5 text-xs font-black bg-black text-white border border-black">
                      [{spec}]
                    </span>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          {/* Course Description */}
          <div className="bg-white border-2 border-black p-4 shadow-brutal mb-6">
            <h3 className="text-lg font-black text-black mb-2">Description</h3>
            <p className="text-sm font-bold text-black leading-relaxed">{course.description}</p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Prerequisites */}
            <div className="bg-yellow-50 border-2 border-yellow-300 p-4 shadow-brutal">
              <h3 className="text-lg font-black text-black mb-3">Prerequisites</h3>
              {prerequisites.length > 0 ? (
                <div className="space-y-2">
                  {prerequisites.map(prereq => (
                    <div 
                      key={prereq.id} 
                      className="bg-white border border-yellow-300 p-3 shadow-brutal cursor-pointer hover:shadow-brutal-lg transition-all"
                      onClick={() => onCourseClick && onCourseClick(prereq)}
                    >
                      <div className="font-bold text-black">{prereq.code}</div>
                      <div className="text-sm text-black">{prereq.name}</div>
                      <div className="text-xs text-gray-600 mt-1">Year {prereq.year} {prereq.semester}</div>
                      {onCourseClick && (
                        <div className="text-xs text-yellow-600 mt-1 font-bold">Click to view details</div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-600">No prerequisites required</div>
              )}
            </div>

            {/* Indirect Prerequisites */}
            <div className="bg-orange-50 border-2 border-orange-300 p-4 shadow-brutal">
              <h3 className="text-lg font-black text-black mb-3">Indirect Prerequisites</h3>
              {indirectPrerequisites.length > 0 ? (
                <div className="space-y-2">
                  {indirectPrerequisites.map(indirectPrereq => (
                    <div 
                      key={indirectPrereq.id} 
                      className="bg-white border border-orange-300 p-3 shadow-brutal cursor-pointer hover:shadow-brutal-lg transition-all"
                      onClick={() => onCourseClick && onCourseClick(indirectPrereq)}
                    >
                      <div className="font-bold text-black">{indirectPrereq.code}</div>
                      <div className="text-sm text-black">{indirectPrereq.name}</div>
                      <div className="text-xs text-gray-600 mt-1">Year {indirectPrereq.year} {indirectPrereq.semester}</div>
                      {onCourseClick && (
                        <div className="text-xs text-orange-600 mt-1 font-bold">Click to view details</div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-600">No indirect prerequisites</div>
              )}
            </div>

            

            {/* Following Courses */}
            <div className="bg-pink-50 border-2 border-pink-300 p-4 shadow-brutal">
              <h3 className="text-lg font-black text-black mb-3">Following Courses</h3>
              {followingCourses.length > 0 ? (
                <div className="space-y-2">
                  {followingCourses.map(following => (
                    <div 
                      key={following.id} 
                      className="bg-white border border-pink-300 p-3 shadow-brutal cursor-pointer hover:shadow-brutal-lg transition-all"
                      onClick={() => onCourseClick && onCourseClick(following)}
                    >
                      <div className="font-bold text-black">{following.code}</div>
                      <div className="text-sm text-black">{following.name}</div>
                      <div className="text-xs text-gray-600 mt-1">Year {following.year} {following.semester}</div>
                      {onCourseClick && (
                        <div className="text-xs text-pink-600 mt-1 font-bold">Click to view details</div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-600">No following courses</div>
              )}
            </div>
          </div>

          {/* Complementary Electives Link (for complementary elective cards) */}
          {((course.category === 'Complementary') || course.name === 'Complementary Elective') && (
            <div className="mt-6 bg-blue-50 border-2 border-blue-300 p-4 shadow-brutal">
              <h3 className="text-lg font-black text-black mb-2">Complementary Electives</h3>
              <p className="text-sm font-bold text-black mb-3">See the official list of approved complementary electives.</p>
              <a
                href="https://www.uottawa.ca/faculty-engineering/student-hub/courses-course-sequences/complementary-electives"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all text-sm font-black text-black"
              >
                <span>Open Complementary Electives Page</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Technical Electives List (for technical elective cards) */}
          {((course.category === 'Technical') || course.name === 'Technical Elective') && (
            <div className="mt-6 bg-purple-50 border-2 border-purple-300 p-4 shadow-brutal">
              <h3 className="text-lg font-black text-black mb-2">Technical Electives (2025-2026)</h3>
              <ul className="text-sm font-bold text-black space-y-1 mb-3">
                <li>• CEG 4112 — Topics in Computer Engineering II (3 units)</li>
                <li>• CEG 4140 — Digital Control Systems (3 units)</li>
                <li>• CEG 4158 — Computer Control in Robotics (3 units)</li>
                <li>• CEG 4186 — Wireless Networks (3 units)</li>
                <li>• CEG 4187 — Optical Networks (3 units)</li>
                <li>• CEG 4188 — Higher Layer Network Protocols (3 units)</li>
                <li>• CEG 4190 — Computer Network Design (3 units)</li>
                <li>• CEG 4195 — Applied Machine Learning for Computer Engineering (3 units)</li>
                <li>• CEG 4198 — Distributed Systems Design (3 units)</li>
                <li>• CEG 4316 — Digital Image Processing (3 units)</li>
                <li>• CEG 4396 — Computer Network Management (3 units)</li>
                <li>• CEG 4399 — Design of Secure Computer Systems (3 units)</li>
                <li>• CSI 2120 — Programming Paradigms (3 units)</li>
                <li>• CSI 2132 — Databases I (3 units)</li>
                <li>• CSI 2372 — Advanced Programming Concepts With C++ (3 units)</li>
                <li>• CSI 3120 — Programming Language Concepts (3 units)</li>
                <li>• CSI 3140 — WWW Structures, Techniques and Standards (3 units)</li>
                <li>• CSI 4106 — Introduction to Artificial Intelligence (3 units)</li>
                <li>• ELG 2137 — Circuit Theory II (3 units)</li>
                <li>• ELG 3136 — Electronics II (3 units)</li>
                <li>• ELG 4137 — Principles and Applications of VLSI Design (3 units)</li>
                <li>• ELG 4177 — Digital Signal Processing (3 units)</li>
                <li>• SEG 3102 — Software Design and Architecture (3 units)</li>
                <li>• SEG 3125 — Analysis and Design of User Interfaces (3 units)</li>
              </ul>
              <a
                href="http://catalogue.uottawa.ca/en/undergrad/basc-computer-engineering/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-white border-2 border-black shadow-brutal hover:shadow-brutal-lg transition-all text-sm font-black text-black"
              >
                <span>Open uOttawa CEG Catalogue</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

          {/* Course Details */}
          <div className="mt-6 bg-gray-50 border-2 border-black p-4 shadow-brutal">
            <h3 className="text-lg font-black text-black mb-3">Course Details</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-sm font-bold text-black">Units</div>
                <div className="text-black">{course.units}</div>
              </div>
              <div>
                <div className="text-sm font-bold text-black">Year</div>
                <div className="text-black">{course.year}</div>
              </div>
              <div>
                <div className="text-sm font-bold text-black">Semester</div>
                <div className="text-black">{course.semester}</div>
              </div>

            </div>
            {course.tags.length > 0 && (
              <div className="mt-4">
                <div className="text-sm font-bold text-black mb-2">Tags</div>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-black text-white text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRelationshipModal;
