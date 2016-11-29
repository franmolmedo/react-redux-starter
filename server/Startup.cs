using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

public class Startup
    {
        public void ConfigureServices(IServiceCollection services) { }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.MapWhen(context => {
                var path = context.Request.Path.Value;
                return !path.Contains("api");
            },
            spa => {
                spa.Use((context, next) =>
                {
                    context.Request.Path = new Microsoft.AspNetCore.Http.PathString("/index.html");
                    return next();
                });

                spa.UseStaticFiles();
            });
        }
    }
