"use client";

import { useState } from "react";

type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  score: number;
  reason: string;
  coverLetter: string;
};

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Growth Marketing Manager",
    company: "TechNova",
    location: "Paris",
    score: 9,
    reason: "Strong match: SaaS + acquisition + branding experience",
    coverLetter:
      "Dear Hiring Manager,\n\nI am excited to apply...",
  },
  {
    id: "2",
    title: "Brand Content Specialist",
    company: "Pulse Agency",
    location: "Remote",
    score: 8,
    reason: "Excellent fit for content + storytelling background",
    coverLetter:
      "Dear Hiring Team,\n\nWith my experience in content strategy...",
  },
  {
    id: "3",
    title: "Marketing Analyst",
    company: "DataWave",
    location: "Paris",
    score: 6,
    reason: "Partial match: strong analytics but less brand focus",
    coverLetter:
      "Dear Hiring Manager,\n\nI bring strong analytical skills...",
  },
];

export default function Page() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="min-h-screen bg-[#070A12] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#7c3aed22,transparent_40%),radial-gradient(circle_at_bottom,#06b6d422,transparent_40%)]" />

      {/* Container */}
      <div className="relative max-w-6xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Job Hunter Agent
          </h1>
          <p className="text-gray-400 mt-2">
            for Marine Steimes • AI-powered job matching system
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Jobs list */}
          <div className="lg:col-span-2 space-y-4">
            {mockJobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {job.title}
                    </h2>
                    <p className="text-sm text-gray-400">
                      {job.company} • {job.location}
                    </p>
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-sm font-semibold border ${
                      job.score >= 8
                        ? "border-green-400/40 text-green-300"
                        : job.score >= 6
                        ? "border-yellow-400/40 text-yellow-300"
                        : "border-red-400/40 text-red-300"
                    }`}
                  >
                    {job.score}/10
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-3">
                  {job.reason}
                </p>
              </div>
            ))}
          </div>

          {/* Side panel */}
          <div className="space-y-4">
            {/* AI CV Suggestions */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="font-semibold mb-2">AI CV Suggestions</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Add measurable impact metrics (%, revenue, growth)</li>
                <li>• Highlight SaaS growth marketing tools (HubSpot, GA4)</li>
                <li>• Strengthen branding case studies section</li>
              </ul>
            </div>

            {/* Cover letter preview */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="font-semibold mb-2">Cover Letter</h3>

              {selectedJob ? (
                <pre className="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {selectedJob.coverLetter}
                </pre>
              ) : (
                <p className="text-sm text-gray-500">
                  Select a job to preview AI-generated cover letter
                </p>
              )}
            </div>

            {/* Job insight */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
              <h3 className="font-semibold mb-2">Job Insight</h3>

              {selectedJob ? (
                <div className="text-sm text-gray-300 space-y-2">
                  <p>
                    <span className="text-gray-400">Role:</span>{" "}
                    {selectedJob.title}
                  </p>
                  <p>
                    <span className="text-gray-400">Company:</span>{" "}
                    {selectedJob.company}
                  </p>
                  <p>
                    <span className="text-gray-400">Match Score:</span>{" "}
                    {selectedJob.score}/10
                  </p>
                  <p className="text-gray-400 mt-2">
                    {selectedJob.reason}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  Click a job to see AI analysis
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
